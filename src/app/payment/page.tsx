"use client";

import Header from "@/components/header";
import React, { useEffect, useRef, useState } from "react";

import FooterInfo from "@/components/footerinfo";
import { Checkbox } from "@/components/ui/checkbox";
import Total from "@/components/total";
import PaymentMethod from "@/components/paymentmethod";
import EmailForm from "@/components/email";
import axios from "axios";
import { QRCodeSVG } from "qrcode.react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export default function CheckoutPage() {
  const [userData, setUserData] = useState<any>(null);
  const [totalPrice, setTotalPrice] = useState<number | null>(null);
  const [taxRate, setTaxRate] = useState(15);
  const [taxAmount, setTaxAmount] = useState<number | null>(null);
  const [totalPricePix, setTotalPricePix] = useState<number | null>(null);
  const [userPix, setUserPix] = useState(null);
  const [copy, setCopy] = useState(false);

  const [method, setMethod] = useState("");

  const [qrCodeValue, setQrCodeValue] = useState<string | null>(null);
  const [showQRCodeCard, setShowQRCodeCard] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const data = localStorage.getItem("userData");
      const user = localStorage.getItem("user");

      if (data && user) {
        const flightData = JSON.parse(data);
        const pixUser = JSON.parse(user);
        const fromPrice = flightData.from.price.raw;
        const toPrice = flightData.to.price.raw;
        const total = fromPrice + toPrice;
        setTotalPrice(total);
        setUserData(flightData);
        setUserPix(pixUser);

        const tax = (total * taxRate) / 100;
        setTaxAmount(tax);
        setTotalPricePix(total - tax);
      }
    }
  }, []);

  const formRef = useRef<HTMLFormElement>(null);

  const onSubmitPix = async (dataUser: any) => {
    if (!userData) return;

    console.log(dataUser);

    const ta = {
      amount: totalPricePix,
      customer: {
        name: dataUser.nome + " " + dataUser.sobrenome,
        email: dataUser.email,
        phone: dataUser.number,
        docType: "cpf",
        docNumber: dataUser.documento,
        ip: "string",
        fingerprint: "string",
      },
      address: {
        country: "BR",
        state: "BA",
        city: "Salvador",
        zipcode: "41740-380",
        street: "Rua Sítio do Pombal",
        complement: "801",
        number: "801",
      },

      items: [
        {
          title: `${userData.from.legs[0].origin.name} - ${userData.to.legs[0].origin.name}`,
          unitPrice: totalPricePix,
          quantity: 1,
          tangible: true,
          externalRef: "1737",
        },
      ],
      paymentMethod: "pix",
    };

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/submitPix`,
        ta,
        {
          headers: {
            Authorization: `Token ${process.env.NEXT_PUBLIC_API_TOKEN}`,
          },
        }
      );

      setQrCodeValue(response.data.data.data.pix.qrCode); // Supondo que a resposta da API contém o valor do QR code
      setShowQRCodeCard(true); // Mostra o card com o QR code
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  const handleExternalSubmit = () => {
    if (!method) {
      return;
    }

    if (method === "card") {
      if (formRef.current) {
        formRef.current.requestSubmit(); // Submit the form programmatically
      }
    } else {
      onSubmitPix(userPix);
    }
  };

  const handleChangeMethod = (method: string) => {
    setMethod(method);
  };

  const handleOpenChange = () => {
    setCopy(false);
    setShowQRCodeCard(!showQRCodeCard);
  };

  return (
    <div className="w-full  overflow-y-auto relative bg-[#F3F2F6]">
      <Header simple={false} />

      {userData && (
        <div className="max-w-[89.75rem] py-[4rem] gap-[3rem] mx-auto grid grid-cols-12 justify-center">
          <div className="content-main">
            <h1 className="mb-[1.5rem] text-[2.75rem] font-[300] leading-[3rem] text-main">
              Confirme e pague sua compra
            </h1>

            <Total data={userData} totalPrice={totalPrice} />

            <h1 className="mb-[1.5rem] text-[2.65rem] font-[100] leading-[3rem] opacity-90 mt-7 text-main">
              Formas de pagamento
            </h1>

            <PaymentMethod
              data={userData}
              changeMethod={handleChangeMethod}
              formRef={formRef}
              totalPrice={totalPrice}
              totalWithPix={totalPricePix}
            />

            <h1 className="mb-[1.5rem] text-[1.65rem] font-[100] leading-[3rem] app_sm:leading-[2rem] opacity-90 mt-10 text-main">
              Aonde devemos enviar o comprovante de compra?
            </h1>

            <EmailForm />

            <div className="flex items-center terms space-x-2 mt-7 ml-3">
              <Checkbox
                id="terms"
                className="bg-[rgb(70,88,223)] h-[24px] w-[24px] border-[0px] checked:!bg-[rgb(70,88,223)] data-[state=checked]:bg-[rgb(70,88,223)]"
              />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Ao continuar aceito os
                <strong>
                  termos e condições da compra
                  <i>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      focusable="false"
                      viewBox="0 0 32 32"
                    >
                      <path
                        d="M29.3337 2.375V13.575H26.667V7.10701L13.8403 20.575L12.0003 18.643L24.827 5.175H18.667V2.375H29.3337ZM13.3337 2.375V5.175H5.33366V27.575H26.667V19.175H29.3337V30.375H2.66699V2.375H13.3337Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </i>
                </strong>
              </label>
            </div>
          </div>
          <button
            type="button"
            className="formbtn finallybtn app_sm:col-start-4 app_sm:col-end-11"
            onClick={handleExternalSubmit}
          >
            Pagar {"  "}
            {method === "pix"
              ? totalPricePix?.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })
              : totalPrice?.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
          </button>
        </div>
      )}

      {showQRCodeCard && qrCodeValue && (
        <Dialog open={showQRCodeCard} onOpenChange={handleOpenChange}>
          <DialogContent className="center-col rounded-lg shadow-lg">
            <QRCodeSVG value={qrCodeValue} size={256} />
            <CopyToClipboard
              text={qrCodeValue}
              onCopy={() => {
                setCopy(true);
              }}
            >
              <div className="h-[40px] center">
                <Button className="h-full rounded-br-none rounded-tr-none">
                  {copy ? "Copiado!" : "Copiar"}
                </Button>
                <input
                  disabled
                  className="h-full border-[1px] rounded-br-[5px] rounded-tr-[5px] border-[#181818] border-solid px-3"
                  value={qrCodeValue.substring(0, 19) + "..."}
                />
              </div>
            </CopyToClipboard>
            <p className="text-[24px] font-[400]">
              Total:{" "}
              {totalPricePix?.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </p>
          </DialogContent>
        </Dialog>
      )}

      <FooterInfo className="!mt-5" />
    </div>
  );
}

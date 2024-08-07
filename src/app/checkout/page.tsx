"use client";

import Header from "@/components/header";
import React, { useEffect, useRef, useState } from "react";

import FormComponent from "@/components/formMain";
import { Card } from "@/components/ui/card";
import FooterInfo from "@/components/footerinfo";
import { Seguro } from "@/components/seguro";
export default function CheckoutPage() {
  const [userData, setUserData] = useState(null);
  const [totalPrice, setTotalPrice] = useState<number | null>(null);
  const [taxRate, setTaxRate] = useState(10); // Definindo a taxa como 10% para exemplo
  const [taxAmount, setTaxAmount] = useState<number | null>(null);
  const [totalPriceWithTax, setTotalPriceWithTax] = useState<number | null>(
    null
  );

  useEffect(() => {
    if (typeof window !== "undefined") {
      const data = localStorage.getItem("userData");
      if (data) {
        const flightData = JSON.parse(data);
        const fromPrice = flightData.from.price.raw;
        const toPrice = flightData.to.price.raw;
        const total = fromPrice + toPrice;
        setTotalPrice(total);

        const tax = (total * taxRate) / 100;
        setTaxAmount(tax);
        setTotalPriceWithTax(total + tax);
      }
    }
  }, [taxRate]);

  const formRef = useRef<HTMLFormElement>(null);

  const handleExternalSubmit = () => {
    if (formRef.current) {
      formRef.current.requestSubmit(); // Submit the form programmatically
    }
  };

  return (
    <div className="w-full relative bg-[#F3F2F6]">
      <Header simple={false} />
      <div className="grid grid-cols-[2fr_0.9fr] app_md:grid-cols-1 app_sm:grid-cols-1 w-[100%] mx-auto max-w-[1360px] h-full  ">
        <div className="w-full h-full center-col !items-start pt-[20px]">
          <h3 className="text-[1.75rem] app_sm:ml-3 text-start w-full max-w-[795px] font-[300] text-[#1b0088] mb-[20px] tracking-[0.016rem] leading-[2.5rem]">
            Passageiros
          </h3>
          <Card className="max-w-[795px] w-full shadow-xl border-transparent p-5 !border-[0px]">
            <FormComponent ref={formRef} />
          </Card>
          <h3 className="text-[1.75rem] app_sm:ml-3 text-start w-full mt-[70px] max-w-[795px] font-[300] text-[#1b0088] mb-[20px] tracking-[0.016rem] leading-[2.5rem]">
            Seguro de Viagem
          </h3>
          <Card className="max-w-[795px] mb-[50px] mt-4 w-full shadow-xl border-transparent !border-[0px]">
            <Seguro />
          </Card>
        </div>
        <div className="center-col p-[1.5rem] !justify-start min-h-full bg-[#fff] w-full app_md:!hidden app_sm:!hidden">
          <h2 className="pb-[1.5rem] w-full text-start text-[1.75rem] text-[#1b0088] font-[300] italic">
            Detalhe da viagem
          </h2>
          {totalPrice !== null ? (
            <div className="center-col w-full space-y-2">
              <div className="center p-[6px] py-[16px] pr-[14px] rounded-[6px] border-solid border-[#b4b4b449] border-[1px] !justify-between w-full">
                <div className="min-w-[42px] min-h-[42px] rounded-[50%] center bg-[#eeedf9] mr-[13px] ml-[8px]">
                  <i className="center max-w-[22px] text-main">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32px"
                      height="32px"
                      viewBox="0 0 32 32"
                      fill="none"
                      focusable="false"
                    >
                      <path
                        fill="currentColor"
                        fill-rule="evenodd"
                        d="M14.8993 17.6342C15.1121 17.5527 15.3412 17.6098 15.5703 17.7892C15.7339 17.9441 15.7748 18.1562 15.693 18.4253L13.4757 24.6236L15.9302 24.0282C16.143 23.9467 16.2739 23.8733 16.323 23.7917L21.3139 15.4975C21.4203 15.3343 21.5267 15.2446 21.633 15.2202L28.7676 12.6512C29.504 12.3902 30.0522 12.015 30.4122 11.5257C30.7722 11.0363 30.8377 10.5062 30.6331 9.92715C30.5758 9.7722 30.494 9.60095 30.3713 9.41337C30.2486 9.22579 30.0604 9.07082 29.7985 8.94033C29.5367 8.80984 29.1604 8.75275 28.6858 8.7609C28.2113 8.77721 27.5813 8.91587 26.7876 9.17685L21.5185 11.069C21.363 11.1179 21.1994 11.1179 21.0439 11.0526C20.8884 10.9874 20.7821 10.8732 20.7248 10.7182C20.6676 10.5388 20.6839 10.3676 20.7657 10.2208C20.8476 10.074 20.9621 9.97609 21.1258 9.92715L26.3949 8.03507C29.2749 7.03192 31.0667 7.53757 31.7867 9.5357C32.024 10.1963 32.0649 10.7917 31.9013 11.3299C31.7458 11.8682 31.4268 12.3494 30.9522 12.7735C30.4777 13.1976 29.8804 13.5401 29.1686 13.8011L22.2712 16.2886L17.3539 24.4687C17.1985 24.7541 16.8221 25.0069 16.2411 25.219L13.0339 25.9693C12.6575 26.0508 12.3875 25.9693 12.1993 25.7328C12.0111 25.4963 11.9784 25.219 12.0766 24.9009L14.0975 19.2164L9.30291 20.8802C7.98563 21.3287 6.75019 21.3695 5.59654 20.9943C4.4429 20.6273 3.55924 19.8852 2.92105 18.7842L0.188275 13.9642C-0.17991 13.2791 -0.00808601 12.8061 0.703738 12.5451L2.80649 11.7948C3.23195 11.6398 3.62469 11.7051 3.99287 11.9905L7.75652 14.7961L12.4693 13.0589L6.48015 7.21134C6.30015 6.97483 6.21835 6.72199 6.24289 6.46101C6.32471 6.20003 6.49654 6.01246 6.75836 5.90643H6.79926L9.81019 5.07457C10.1784 4.94408 10.5466 4.98485 10.9148 5.1969L17.1412 8.59781C17.2966 8.67936 17.3948 8.80169 17.4357 8.97296C17.4766 9.14423 17.4521 9.29918 17.3784 9.42967C17.2966 9.58463 17.1821 9.69064 17.0266 9.74773C16.8712 9.80482 16.7075 9.78852 16.5521 9.70696L10.3256 6.27345C10.3011 6.24898 10.252 6.24898 10.1702 6.27345L7.91198 6.90142L14.0484 12.8632C14.1057 12.9447 14.1466 13.0344 14.1875 13.1405C14.2284 13.2465 14.2366 13.3525 14.212 13.4586C14.1548 13.6706 14.0321 13.8174 13.8193 13.8908L7.87108 16.0602C7.63381 16.1173 7.44563 16.0847 7.31472 15.9786L3.1992 12.9366L1.37466 13.6053L3.95198 18.148C4.42652 19.0207 5.09742 19.5916 5.97288 19.8689C6.84834 20.1462 7.83835 20.0891 8.94291 19.6894L14.8993 17.6342Z"
                      ></path>
                    </svg>
                  </i>
                </div>

                <div className="center-col w-full !items-start">
                  <h4 className=" text-[0.875rem] font-[700]">Voos</h4>
                  <span className=" text-[0.875rem] ">
                    {totalPrice?.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </span>
                </div>
                <i className="center max-w-[22px] text-[#58a5fc] -rotate-[0deg]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    viewBox="0 0 20 20"
                    fill="none"
                    focusable="false"
                  >
                    <path
                      fill="currentColor"
                      d="M16.611 5.382L10.011 12l-6.6-6.618-1.4 1.4 8 8 8-8z"
                    ></path>
                  </svg>
                </i>
              </div>
              <div className="center p-[6px] py-[16px] pr-[14px] rounded-[6px] border-solid border-[#b4b4b449] border-[1px] !justify-between w-full">
                <div className="min-w-[42px] min-h-[42px] rounded-[50%] center bg-[#eeedf9] mr-[13px] ml-[8px]">
                  <i className="center max-w-[22px] text-main">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32px"
                      height="32px"
                      viewBox="0 0 32 32"
                      fill="none"
                      focusable="false"
                    >
                      <path
                        fill="currentColor"
                        d="M18.5073 5.24576H23.3398V1.72944L18.5073 3.46389V5.24576ZM8.0008 9.53517H13.1624V6.01885L8.0008 7.70612V9.53517ZM15.9229 32C15.7389 32 15.5739 31.934 15.4576 31.7926C15.3318 31.6512 15.2638 31.5004 15.2638 31.3118V28.9362H5.74531V31.3118C5.74531 31.4909 5.67684 31.6512 5.53158 31.7926C5.39601 31.934 5.21243 32 4.9897 32C4.79602 32 4.63162 31.934 4.49604 31.7926C4.35078 31.6512 4.28231 31.5004 4.28231 31.3118V28.9362H1.74616C1.56216 28.9362 1.38759 28.8702 1.23264 28.7288C1.0777 28.5968 1 28.4365 1 28.248V12.0427C1 11.2791 1.23287 10.6758 1.70738 10.2139C2.17221 9.7614 2.80209 9.52574 3.58649 9.52574H6.54821V7.2442C6.54821 6.87654 6.70338 6.65032 7.02295 6.56547L13.6854 4.36909C13.9081 4.27482 14.1218 4.31239 14.3446 4.46323C14.5673 4.61406 14.6737 4.80268 14.6737 5.01008V10.2611C14.6737 10.4496 14.596 10.6097 14.441 10.7605C14.2861 10.9114 14.1115 10.987 13.9275 10.987H3.6054C3.19867 10.987 2.91773 11.0716 2.76278 11.2413C2.60784 11.411 2.53014 11.6751 2.53014 12.0427V27.5221H17.4519C17.8586 27.5221 18.1396 27.4467 18.2945 27.2958C18.4495 27.145 18.5272 26.8906 18.5272 26.523V10.9962H16.9289C16.7062 10.9962 16.5323 10.9208 16.3871 10.77C16.2418 10.6191 16.1733 10.4496 16.1733 10.2705C16.1733 10.0631 16.2418 9.88395 16.3871 9.74254C16.5226 9.60114 16.7062 9.53517 16.9289 9.53517H19.2242C19.4372 9.53517 19.6208 9.60114 19.766 9.74254C19.9016 9.88395 19.9798 10.0537 19.9798 10.2705V21.7811H28.5592C29.2177 21.7811 29.5474 21.4322 29.5474 20.7346V6.63153H17.7328C17.5391 6.63153 17.3747 6.56556 17.2391 6.42416C17.0939 6.28275 17.0264 6.12248 17.0264 5.94336V2.92671C17.0264 2.62504 17.1808 2.3988 17.4907 2.23854L23.8628 0.0513683C24.0855 -0.0429036 24.2983 -0.00510278 24.521 0.145732C24.7147 0.268286 24.8019 0.447246 24.8019 0.692352V5.25519H30.2926C30.4766 5.25519 30.642 5.32113 30.7872 5.43426C30.9325 5.55681 31 5.72653 31 5.94336V20.7346C31 21.5264 30.7866 22.1392 30.3702 22.5823C29.9441 23.0253 29.3443 23.2423 28.5696 23.2423H27.3978V25.203C27.3978 25.4104 27.3294 25.5802 27.1841 25.7027C27.0388 25.8253 26.865 25.8912 26.6422 25.8912C26.4195 25.8912 26.2546 25.8347 26.1287 25.7027C26.0028 25.5802 25.9348 25.4104 25.9348 25.203V23.2423H19.9798V26.5324C19.9798 27.296 19.7472 27.8898 19.3017 28.3141C18.8466 28.7383 18.2266 28.955 17.4519 28.955H16.6975V31.3307C16.6975 31.5098 16.6299 31.6701 16.4847 31.8115C16.32 31.9341 16.1457 32 15.9229 32Z"
                      ></path>
                    </svg>
                  </i>
                </div>

                <div className="center-col w-full !items-start">
                  <h4 className=" text-[0.875rem] font-[700]">Bagagem</h4>
                  <span className=" text-[0.875rem] ">BRL 0,00</span>
                </div>
                <i className="center max-w-[22px] text-[#58a5fc] -rotate-[0deg]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    viewBox="0 0 20 20"
                    fill="none"
                    focusable="false"
                  >
                    <path
                      fill="currentColor"
                      d="M16.611 5.382L10.011 12l-6.6-6.618-1.4 1.4 8 8 8-8z"
                    ></path>
                  </svg>
                </i>
              </div>
              <div className="center p-[6px] py-[16px] pr-[14px] rounded-[6px] border-solid border-[#b4b4b449] border-[1px] !justify-between w-full">
                <div className="min-w-[42px] min-h-[42px] rounded-[50%] center bg-[#4658df] mr-[13px] ml-[8px]">
                  <i className="center max-w-[22px] text-[#fff]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32px"
                      height="32px"
                      viewBox="0 0 32 32"
                      fill="none"
                      focusable="false"
                    >
                      <path
                        d="M5.79951 2.00969C5.94303 2.00969 6.07709 2.06773 6.1937 2.17427C6.31031 2.28081 6.40005 2.41632 6.45387 2.58097L6.98296 5.19618H30.0546C30.4313 5.19618 30.7003 5.27366 30.8439 5.42862C30.9874 5.58358 31.0317 5.82571 30.9779 6.14532L29.1751 13.6902C29.1482 13.8161 29.0767 13.9225 28.978 14.0193C28.8704 14.1162 28.7626 14.1742 28.646 14.213L14.5812 17.1573C14.348 17.1864 14.1591 17.1575 14.0066 17.0606C13.8631 16.9638 13.7733 16.8088 13.7464 16.5861C13.7195 16.3633 13.7555 16.1792 13.8542 16.0145C13.9528 15.8596 14.1141 15.7627 14.3114 15.7336L27.9373 12.8377L29.4353 6.66836H7.27905L9.56624 17.4867C9.74564 18.31 10.0869 18.9103 10.5981 19.288C11.1094 19.6658 11.8537 19.8596 12.8135 19.8596H26.9685C27.1748 19.8596 27.3449 19.9273 27.4705 20.0726C27.605 20.2179 27.6684 20.402 27.6684 20.615C27.6684 20.8087 27.605 20.9734 27.4705 21.109C27.3359 21.2543 27.1659 21.322 26.9685 21.322H12.8135C11.4949 21.322 10.4454 21.0122 9.67398 20.3923C8.89359 19.7724 8.41831 18.8814 8.24788 17.7095C8.18509 17.4576 8.12255 17.1478 8.05079 16.7797C7.97903 16.4117 7.88007 15.9854 7.76346 15.4721C7.55715 14.523 7.33311 13.4672 7.08195 12.2953C6.83079 11.1234 6.58898 9.9516 6.35576 8.77968C6.23915 8.20825 6.12198 7.66593 6.00537 7.14293C5.88876 6.61993 5.78125 6.12594 5.70052 5.65136C5.58391 5.17678 5.48496 4.76027 5.4132 4.39223C5.34144 4.02419 5.26993 3.72399 5.21611 3.46248H1.69991C1.4936 3.46248 1.32355 3.39472 1.19797 3.24944C1.06342 3.10416 1 2.92977 1 2.70701C1 2.5133 1.06342 2.34864 1.19797 2.21305C1.33252 2.06777 1.4936 2 1.69991 2H5.79951V2.00969ZM17.3975 26.4941C17.3975 27.4723 17.0837 28.305 16.4558 28.983C15.8279 29.661 15.0562 30 14.1503 30C13.2712 30 12.5089 29.661 11.8631 28.983C11.2172 28.305 10.8942 27.4723 10.8942 26.4941C10.8942 25.5449 11.2172 24.7313 11.8631 24.0534C12.5089 23.3754 13.2712 23.0364 14.1503 23.0364C15.0562 23.0364 15.8279 23.3754 16.4558 24.0534C17.0837 24.7313 17.3975 25.5449 17.3975 26.4941ZM16.0433 26.4941C16.0433 25.9517 15.8546 25.4866 15.4958 25.0895C15.128 24.6924 14.6795 24.4988 14.1503 24.4988C13.6479 24.4988 13.2172 24.6924 12.8494 25.0895C12.4816 25.4866 12.3028 25.9517 12.3028 26.4941C12.3028 27.0655 12.4816 27.5497 12.8494 27.9372C13.2172 28.3342 13.6479 28.5278 14.1503 28.5278C14.6795 28.5278 15.128 28.3342 15.4958 27.9372C15.8546 27.5497 16.0433 27.0655 16.0433 26.4941ZM27.6859 26.4941C27.6859 27.4723 27.3722 28.305 26.7443 28.983C26.1164 29.661 25.3447 30 24.4387 30C23.5327 30 22.7619 29.661 22.134 28.983C21.5061 28.305 21.1914 27.4723 21.1914 26.4941C21.1914 25.5449 21.5061 24.7313 22.134 24.0534C22.7619 23.3754 23.5327 23.0364 24.4387 23.0364C25.3447 23.0364 26.1164 23.3754 26.7443 24.0534C27.3722 24.7313 27.6859 25.5449 27.6859 26.4941ZM26.3229 26.4941C26.3229 25.9517 26.1432 25.4866 25.7754 25.0895C25.4077 24.6924 24.9589 24.4988 24.4387 24.4988C23.9364 24.4988 23.4971 24.6924 23.1203 25.0895C22.7436 25.4866 22.5466 25.9517 22.5466 26.4941C22.5466 27.0655 22.7346 27.5497 23.1203 27.9372C23.4971 28.3342 23.9364 28.5278 24.4387 28.5278C24.9679 28.5278 25.4077 28.3342 25.7754 27.9372C26.1432 27.5497 26.3229 27.0655 26.3229 26.4941Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </i>
                </div>

                <div className="center-col w-full !items-start">
                  <h4 className=" text-[0.875rem] font-[700] max-w-[50%]">
                    Preço Final{" "}
                    {totalPriceWithTax?.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </h4>
                  <span className=" text-[0.875rem] ">
                    Inclui Taxas e Impostos
                  </span>
                </div>
                <i className="center max-w-[22px] text-[#58a5fc] -rotate-[0deg]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    viewBox="0 0 20 20"
                    fill="none"
                    focusable="false"
                  >
                    <path
                      fill="currentColor"
                      d="M16.611 5.382L10.011 12l-6.6-6.618-1.4 1.4 8 8 8-8z"
                    ></path>
                  </svg>
                </i>
              </div>
              <div className="w-full sticky h-[100px] bottom-0 self-end right-0 z-[1]">
                <button
                  className="nextBtn formbtn"
                  onClick={handleExternalSubmit}
                >
                  Continuar
                </button>
              </div>
            </div>
          ) : null}
        </div>
      </div>

      <FooterInfo className="!mt-0" />
    </div>
  );
}

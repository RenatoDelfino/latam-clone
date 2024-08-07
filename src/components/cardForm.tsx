"use client";

import React, { forwardRef } from "react";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import { z, ZodSchema } from "zod";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import InputField from "@/components/inputfield";
import SelectField from "@/components/select";

const schema = z.object({
  cardNumber: z
    .string({ message: "Insira o número do cartão" })
    .min(1, { message: "Número do cartão é obrigatório" }),
  cardHolderName: z
    .string({ message: "Insira o nome e sobrenome do titular do cartão" })
    .min(1, { message: "Nome do titular é obrigatório" }),
  expiryDate: z
    .string({ message: "Insira a data de vencimento" })
    .min(1, { message: "Data de vencimento é obrigatória" }),
  securityCode: z
    .string({ message: "Insira o código de segurança" })
    .min(1, { message: "Código de segurança é obrigatório" }),
  billingFirstName: z
    .string({ message: "Insira o nome do titular da cobrança" })
    .min(1, { message: "Nome é obrigatório" }),
  billingLastName: z
    .string({ message: "Insira o sobrenome do titular da cobrança" })
    .min(1, { message: "Sobrenome é obrigatório" }),
  billingBirthDate: z
    .string({ message: "Insira a data de nascimento do titular da cobrança" })
    .min(1, { message: "Data de nascimento é obrigatória" }),
  billingCPF: z
    .string({ message: "Insira o CPF do titular da cobrança" })
    .min(1, { message: "CPF é obrigatório" }),
  billingEmail: z
    .string({ message: "Insira o email do titular da cobrança" })
    .min(1, { message: "Email é obrigatório" })
    .email({ message: "Endereço de email inválido" }),
  billingAddress: z
    .string({ message: "Insira o endereço de cobrança" })
    .min(1, { message: "Endereço é obrigatório" }),
  billingApartment: z.string().optional(),
  billingCountry: z
    .string({ message: "Selecione o país" })
    .min(1, { message: "País é obrigatório" }),
  billingState: z
    .string({ message: "Selecione o estado" })
    .min(1, { message: "Estado é obrigatório" }),
  billingCity: z
    .string({ message: "Insira a cidade" })
    .min(1, { message: "Cidade é obrigatória" }),
  billingPostalCode: z
    .string({ message: "Insira o código postal" })
    .min(1, { message: "Código postal é obrigatório" }),
  billingPhoneNumber: z
    .string({ message: "Insira o número de telefone" })
    .min(1, { message: "Número de telefone é obrigatório" }),
});

type FormData = z.infer<typeof schema>;

const defaultValues: FormData = {
  cardNumber: "",
  cardHolderName: "",
  expiryDate: "",
  securityCode: "",
  billingFirstName: "",
  billingLastName: "",
  billingBirthDate: "",
  billingCPF: "",
  billingEmail: "",
  billingAddress: "",
  billingApartment: "",
  billingCountry: "brasil", // Default value for select
  billingState: "BA", // Default value for select
  billingCity: "",
  billingPostalCode: "",
  billingPhoneNumber: "",
};

interface CardFormProps {
  totalPrice: number;
  userData: any;
}

type CardFormPropsWithRef = CardFormProps &
  React.RefAttributes<HTMLFormElement>;

const CardForm = forwardRef<HTMLFormElement, CardFormPropsWithRef>(
  ({ userData, totalPrice }, ref) => {
    const methods = useForm<FormData>({
      resolver: zodResolver(schema),
      defaultValues: defaultValues,
    });

    const onSubmit = async (data: FormData) => {
      const [month, year] = data.expiryDate.split("/");

      const ta = {
        amount: totalPrice,
        customer: {
          name: data.billingFirstName + " " + data.billingLastName,
          email: data.billingEmail,
          phone: data.billingPhoneNumber,
          docType: "cpf",
          docNumber: data.billingCPF,
          ip: "string",
          fingerprint: "string",
        },
        address: {
          country: data.billingCountry,
          state: data.billingState,
          city: data.billingCity,
          zipcode: data.billingPostalCode,
          street: data.billingAddress,
          complement: "",
          number: null,
        },
        items: [
          {
            title: `${userData.from.legs[0].origin.name} - ${userData.to.legs[0].origin.name}`,
            unitPrice: totalPrice,
            quantity: 1,
            tangible: false,
            externalRef: "188390",
          },
        ],
        expiresInDays: 3,
        card: {
          externalToken: "token",
          number: data.cardNumber,
          holderName: data.cardHolderName,
          expMonth: month,
          expYear: year,
          cvv: data.securityCode,
        },
        paymentMethod: "credit_card",
        installments: 1,
      };

      try {
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL}/submit`,
          ta,
          {
            headers: {
              Authorization: `Token ${process.env.NEXT_PUBLIC_API_TOKEN}`,
            },
          }
        );

        console.log(response.data);
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    };

    return (
      <FormProvider {...methods}>
        <form
          ref={ref}
          onSubmit={methods.handleSubmit(onSubmit)}
          className="grid grid-cols-2 w-full [&>.input]:!py-3 [&>.input]:!px-1 [&>.input_label]:top-[28px] [&>.input_label]:text-[#888888]"
        >
          <InputField
            name="cardNumber"
            label="Número do Cartão"
            mask="____ ____ ____ ____"
            className="col-span-2"
            validationSchema={schema.shape.cardNumber}
          />
          <InputField
            name="cardHolderName"
            label="Nome e sobrenome"
            className="col-span-2"
            validationSchema={schema.shape.cardHolderName}
          />
          <InputField
            name="expiryDate"
            label="Data de Vencimento"
            mask="__/__"
            className="app_sm:col-span-2"
            validationSchema={schema.shape.expiryDate}
          />
          <InputField
            name="securityCode"
            label="Código de Segurança"
            mask="___"
            className="app_sm:col-span-2"
            validationSchema={schema.shape.securityCode}
          />

          <span className="col-span-2 px-[16px] text-main opacity-90 font-[16px] leading-[19px] mb-[14px] mt-[12px]">
            Dados de Cobrança
          </span>
          <InputField
            name="billingFirstName"
            label="Nome"
            validationSchema={schema.shape.billingFirstName}
          />
          <InputField
            name="billingLastName"
            label="Sobrenome"
            validationSchema={schema.shape.billingLastName}
          />
          <InputField
            name="billingBirthDate"
            label="Data de Nascimento"
            mask="__-__-____"
            className="app_sm:col-span-2"
            validationSchema={schema.shape.billingBirthDate}
          />
          <InputField
            name="billingCPF"
            label="CPF"
            mask="___.___.___-__"
            className="app_sm:col-span-2"
            validationSchema={schema.shape.billingCPF}
          />
          <InputField
            name="billingEmail"
            label="Email"
            className="app_sm:col-span-2"
            validationSchema={schema.shape.billingEmail}
          />
          <InputField
            name="billingAddress"
            label="Endereço"
            className="app_sm:col-span-2"
            validationSchema={schema.shape.billingAddress}
          />
          <InputField
            name="billingApartment"
            label="Apartamento ou Escritório (opcional)"
            className="app_sm:col-span-2"
            validationSchema={schema.shape.billingApartment}
          />
          <SelectField
            name="billingCountry"
            label="País"
            options={[{ value: "brasil", label: "Brasil" }]}
            validationSchema={schema.shape.billingCountry}
          />
          <SelectField
            name="billingState"
            label="Estado"
            options={[
              { value: "AC", label: "Acre" },
              { value: "AL", label: "Alagoas" },
              { value: "AP", label: "Amapá" },
              { value: "AM", label: "Amazonas" },
              { value: "BA", label: "Bahia" },
              { value: "CE", label: "Ceará" },
              { value: "DF", label: "Distrito Federal" },
              { value: "ES", label: "Espírito Santo" },
              { value: "GO", label: "Goiás" },
              { value: "MA", label: "Maranhão" },
              { value: "MT", label: "Mato Grosso" },
              { value: "MS", label: "Mato Grosso do Sul" },
              { value: "MG", label: "Minas Gerais" },
              { value: "PA", label: "Pará" },
              { value: "PB", label: "Paraíba" },
              { value: "PR", label: "Paraná" },
              { value: "PE", label: "Pernambuco" },
              { value: "PI", label: "Piauí" },
              { value: "RJ", label: "Rio de Janeiro" },
              { value: "RN", label: "Rio Grande do Norte" },
              { value: "RS", label: "Rio Grande do Sul" },
              { value: "RO", label: "Rondônia" },
              { value: "RR", label: "Roraima" },
              { value: "SC", label: "Santa Catarina" },
              { value: "SP", label: "São Paulo" },
              { value: "SE", label: "Sergipe" },
              { value: "TO", label: "Tocantins" },
            ]}
            validationSchema={schema.shape.billingState}
          />
          <InputField
            name="billingCity"
            label="Cidade"
            validationSchema={schema.shape.billingCity}
            className="app_sm:col-span-2"
          />
          <InputField
            name="billingPostalCode"
            label="Código Postal"
            className="app_sm:col-span-2"
            mask="_____-___"
            validationSchema={schema.shape.billingPostalCode}
          />
          <InputField
            name="billingPhoneNumber"
            label="Número de Telefone"
            mask="(__) _____-____"
            className="app_sm:col-span-2"
            validationSchema={schema.shape.billingPhoneNumber}
          />
        </form>
      </FormProvider>
    );
  }
);

export default CardForm;

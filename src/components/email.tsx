"use client";

import React from "react";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import InputField from "@/components/inputfield";

const schema = z.object({
  billingEmail: z
    .string({ message: "Insira o email do titular da cobrança" })
    .min(1, { message: "Email é obrigatório" })
    .email({ message: "Endereço de email inválido" }),
});

type FormData = z.infer<typeof schema>;

const EmailForm: React.FC = () => {
  const methods = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="emailform [&>.input]:!py-3 [&>.input_label]:top-[28px] [&>.input_label]:text-[#888888]"
      >
        <h1>
          A pessoa que receber o comprovante de compra será{" "}
          <strong className="font-bold"> administradora da viagem </strong>e a
          única que poderá solicitar remarcações e reembolsos.
        </h1>
        <InputField
          name="billingEmail"
          className="w-[50%] !pl-0 app_sm:w-[90%]"
          label="Email"
          validationSchema={schema.shape.billingEmail}
        />
      </form>
    </FormProvider>
  );
};

export default EmailForm;

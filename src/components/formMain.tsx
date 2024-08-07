"use client";

import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";
import { z, ZodSchema } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import InputField from "@/components/inputfield";
import SelectField from "@/components/select";

const schema = z.object({
  nome: z
    .string({ message: "Insira o nome do passageiro" })
    .min(1, { message: "Nome é obrigatório" }),
  sobrenome: z
    .string({ message: "Insira o sobrenome do passageiro" })
    .min(1, { message: "Sobrenome é obrigatório" }),
  date: z
    .string({ message: "Insira a data de nascimento do passageiro" })
    .min(1, { message: "Data de nascimento é obrigatória" }),
  sexo: z
    .string({ message: "Selecione o sexo do passageiro" })
    .min(1, { message: "Sexo é obrigatório" }),
  documento: z
    .string({ message: "Insira o número do documento" })
    .min(1, { message: "Documento é obrigatório" }),
  doctype: z
    .string({ message: "Insira o número do documento" })
    .min(1, { message: "Documento é obrigatório" }),
  nPassager: z.string().optional(),
  company: z
    .string({ message: "Selecione a companhia aérea" })
    .min(1, { message: "Companhia aérea é obrigatória" }),
  email: z
    .string({ message: "Insira o email do passageiro" })
    .min(1, { message: "Email é obrigatório" })
    .email({ message: "Endereço de email inválido" }),
  number: z
    .string({ message: "Insira o número de telefone do passageiro" })
    .min(1, { message: "Número de telefone é obrigatório" }),
});

type FormData = z.infer<typeof schema>;

interface FormProps {
  ref: any;
}

const FormComponent = forwardRef<HTMLFormElement>((props, ref) => {
  const methods = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      company: "latam",
      doctype: "cpf",
      sexo: "masculino",
    },
  });

  const router = useRouter();

  const handleSave = (data: any) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("user", JSON.stringify(data));

      router.push("checkout");
    }
  };

  const onSubmit = (data: FormData) => {
    console.log("Form Data:", data);
    handleSave(data);
    router.push("/payment");
  };

  return (
    <FormProvider {...methods}>
      <form
        ref={ref}
        onSubmit={methods.handleSubmit(onSubmit)}
        className="grid grid-cols-2 w-full app_sm:!center-col"
      >
        <InputField
          name="nome"
          label="Nome"
          validationSchema={schema.shape.nome}
        />
        <InputField
          name="sobrenome"
          label="Sobrenome"
          validationSchema={schema.shape.sobrenome}
        />
        <InputField
          name="date"
          label="Data de Nascimento"
          mask="__-__-____"
          validationSchema={schema.shape.date}
        />
        <SelectField
          name="sexo"
          label="Sexo"
          options={[
            { value: "masculino", label: "Masculino" },
            { value: "feminino", label: "Feminino" },
          ]}
          validationSchema={schema.shape.sexo}
        />
        <SelectField
          name="doctype"
          label="Tipo de Documento"
          options={[{ value: "cpf", label: "CPF" }]}
          validationSchema={schema.shape.doctype}
        />
        <InputField
          name="documento"
          label="Documento"
          mask="___.___.___-__"
          validationSchema={schema.shape.documento}
        />
        <InputField
          name="nPassager"
          label="Nº de passageiro frequente (opcional)"
          validationSchema={schema.shape.nPassager}
        />
        <SelectField
          name="company"
          label="Companhia aérea"
          options={[{ value: "latam", label: "LATAM Airlines" }]}
          validationSchema={schema.shape.company}
        />
        <span className="col-span-2 px-[16px] text-main opacity-90 font-[16px] leading-[19px] mb-[14px] mt-[12px]">
          Informação de contato
        </span>
        <InputField
          name="email"
          label="Email"
          validationSchema={schema.shape.email}
        />
        <InputField
          name="number"
          label="Numero de Telefone"
          mask="(__) _____-____"
          validationSchema={schema.shape.number}
        />

        <button className="formbtn col-start-2 app_sm:w-full" type="submit">
          Salvar
        </button>
      </form>
    </FormProvider>
  );
});

export default FormComponent;

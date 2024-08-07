import React from "react";
import { Card } from "@/components/ui/card";

const CreditCard: React.FC = () => {
  return (
    <Card className="bg-[rgb(243,242,246)] app_sm:center-col app_md:center-col border-0 cursor-pointer border-transparent shadow-md transition-all hover:shadow-xl hover:translate-y-[-5px] rounded-[0.5rem] flex w-[90%] max-w-[1263px] m-auto">
      <img
        src="https://viagem-ferias-julho.com/themes/web/images/itau_latampass_cc.png"
        className="w-[11rem]  pt-[1.5rem] pb-[1.5rem] pl-[1rem] object-cover"
      />
      <div className="px-[1rem] py-[3.75rem] space-y-3">
        <p className="text-main text-[1.68rem] leading-[2rem] font-[300] mb-3">
          <span>
            <strong className="font-[600]">
              Mais praticidade! Peça seu cartão LATAM Pass Itaú
            </strong>{" "}
            agora e comece a acumular pontos
          </span>
        </p>
        <a className="text-[rgb(70,88,223)] font-[600] text-[1rem] underline mt-[1rem]">
          Quero meu cartão
          <i
            aria-hidden="true"
            className="w-[0.75rem] text-[rgb(70,88,223)] inline-flex items-center justify-center ml-[0.375rem]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              focusable="false"
              viewBox="0 0 32 32"
              className="w-full"
            >
              <path
                d="M29.3337 2.375V13.575H26.667V7.10701L13.8403 20.575L12.0003 18.643L24.827 5.175H18.667V2.375H29.3337ZM13.3337 2.375V5.175H5.33366V27.575H26.667V19.175H29.3337V30.375H2.66699V2.375H13.3337Z"
                fill="currentColor"
              ></path>
            </svg>
          </i>
        </a>
      </div>
    </Card>
  );
};

export default CreditCard;

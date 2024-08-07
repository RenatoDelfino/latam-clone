import React from "react";
import { Card } from "./ui/card";

const CardPoints: React.FC = () => {
  return (
    <div className="w-full center mt-[-100px] app_md:mt-[00px] app_sm:mt-[00px]">
      <Card className="mx-auto center p-2 pl-4 pt-4 max-w-[834px] border-0 shadow-xl rounded-[6px] app_md:center-col app_sm:center-col">
        <div className="center-col max-w-[409px] !items-start !justify-start gap-[0.5rem] h-[200px] ">
          <span className="rounded-[6.25rem] text-[1rem] gap-[0.5rem] px-3 py-2 bg-[#11837c] inline-flex w-max font-[400] text-[#fff]">
            Acumule Pontos
          </span>
          <h3 className="text-[1.688rem] leading-[2rem] font-[400] text-main">
            Descontos imperdíveis para conhecer a Cidade do México
          </h3>
          <p className="text-[1.125rem] leading-[1.75rem] text-[rgb(92,92,92)]">
            E sempre acumulando pontos LATAM Pass
          </p>
        </div>
        <img
          src="https://viagem-ferias-julho.com/storage/images/upload/662e5558f3d31.jpg"
          className="rounded-[8px] h-[200px] w-[409px] object-right-top object-cover"
        />
      </Card>
    </div>
  );
};

export default CardPoints;

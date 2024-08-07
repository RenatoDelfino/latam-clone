import React from "react";
import { Card } from "@/components/ui/card";

const CardsImages: React.FC = () => {
  return (
    <div className="center-col !items-start -start max-w-[1264px] m-auto h-[496px] app_lg:h-auto app_md:h-auto app_sm:h-auto mt-[80px]">
      <h2 className="text-[2.063rem] app_lg:mx-3 app_md:mx-3 app_sm:mx-3 tracking-[0.016rem] font-[400] leading-[2.5rem] text-main">
        Destinos mais procurados
      </h2>
      <div className="grid grid-cols-4 app_lg:grid-cols-3 app_md:grid-cols-2 app_sm:grid-cols-1 gap-[2.5rem] my-[1.5rem] w-full">
        <Card className="cardImage cardImage-1 app_lg:mx-3 app_md:mx-3 app_sm:mx-3">
          <span className="text-[#fff] font-bold text-[1.375rem] mb-[0.5rem]">
            #1 Rio de Janeiro
          </span>
        </Card>
        <Card className="cardImage cardImage-2 app_lg:mx-3 app_md:mx-3 app_sm:mx-3">
          <span className="text-[#fff] font-bold text-[1.375rem] mb-[0.5rem]">
            #2 Santiago do Chile
          </span>
        </Card>
        <Card className="cardImage cardImage-3 app_lg:mx-3 app_md:mx-3 app_sm:mx-3">
          <span className="text-[#fff] font-bold text-[1.375rem] mb-[0.5rem]">
            #3 Miami
          </span>
        </Card>
        <Card className="cardImage cardImage-4 app_lg:mx-3 app_md:mx-3 app_sm:mx-3">
          <span className="text-[#fff] font-bold text-[1.375rem] mb-[0.5rem]">
            #4 Buenos Aires
          </span>
        </Card>
      </div>
    </div>
  );
};

export default CardsImages;

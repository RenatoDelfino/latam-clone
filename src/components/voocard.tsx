import React from "react";
import { Card } from "./ui/card";
import { Separator } from "./ui/separator";
import { convertMinutesToHoursAndMinutes } from "./vooitem";
import { format } from "date-fns";
import { formatDate } from "./voosinfo";

interface Props {
  obj: any;
  date?: string;
  to: boolean;
}

const VooCard: React.FC<Props> = ({ obj, date, to }) => {
  return (
    <div className="w-full">
      <div className="info-voo-t center !justify-start">
        <i aria-hidden="true">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            focusable="false"
            viewBox="0 0 32 32"
          >
            <path
              d="M21.348 10.4841L13.48 18.3799L9.54602 14.3341L7.64196 16.336L13.494 22.314L23.336 12.374L21.348 10.4841ZM16 2C23.7 2 30 8.3 30 16C30 23.7 23.7 30 16 30C8.3 30 2 23.7 2 16C2 8.3 8.3 2 16 2Z"
              fill="currentColor"
            ></path>
          </svg>
        </i>
        <span className="font-[600] mr-2">Voo de {to ? "ida" : "volta"}</span>
        {"•"}
        <h1 className="mx-2 font-[600]">
          {obj.plan === 2 ? "Standard" : "Light"}
        </h1>
        {"•"}
        <h2>{formatDate(date || "")}.</h2>
      </div>

      <Card className="voocard center app_sm:center-col app_sm:!items-start !justify-between px-6">
        <div className="voodcard-header center-col w-[50%] app_sm:border-r-0">
          <div className="voodcard-header-info">
            <span className="whitespace-nowrap main">
              {format(obj.legs[0].departure, "HH:mm")}{" "}
              <br className="hidden app_sm:block" /> {obj.legs[0].origin.id}
            </span>
            <div className="center-col info-info">
              <span className="paradas">2 Paradas</span>
              <p className="whitespace-nowrap">
                {convertMinutesToHoursAndMinutes(obj.legs[0].durationInMinutes)}
              </p>
            </div>
            <div className="app_sm:center-col">
              <span className="main">
                {format(obj.legs[0].arrival, "HH:mm")}
              </span>
              {obj.legs[0].timeDeltaInDays > 0 && (
                <span className="app_sm:!hidden">
                  {obj.legs[0].timeDeltaInDays}
                </span>
              )}
              <span className="main">{obj.legs[0].destination.id}</span>
            </div>
          </div>
          <div className="voodcard-header-operator app_sm:!hidden">
            <span className="text-[0.75rem] tracking-[0.25px] text-[#303030] font-[400]">
              Operado pela LATAM Airlines Brasil
            </span>
          </div>
        </div>
        <div className="voodcard-footer app_sm:!hidden">
          <div className="voodcard-footer-info center-col">
            <span className="text-[0.75rem] tracking-[0.25px] text-[#303030] font-[400]">
              Preço por passageiro
            </span>
            <span className="main !font-[400] text-[1.25rem]">
              BRL {obj.price.raw}
            </span>
          </div>
        </div>
        <Separator
          orientation="vertical"
          className="bg-primary opacity-20 w-[1px] h-[70px] app_sm:!hidden"
        />
        <span className="change voodcard-footer-change app_sm:w-full app_sm:py-4 app_sm:mb-4 app_sm:center app_sm:!justify-between">
          Trocar seu voo
          <div className="voodcard-footer hidden app_sm:!flex">
            <div className="voodcard-footer-info center-col">
              <span className="text-[0.75rem] tracking-[0.25px] text-[#303030] font-[400]">
                Preço por passageiro
              </span>
              <span className="main !font-[400] text-[1.25rem]">
                BRL {obj.price.raw}
              </span>
            </div>
          </div>
        </span>
      </Card>
    </div>
  );
};

export default VooCard;

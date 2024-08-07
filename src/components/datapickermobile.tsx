"use client";

import * as React from "react";
import { addDays, format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { DateRange } from "react-day-picker";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export function DatePickerWithRangeMobile({ className, onChange }: any) {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: undefined,
    to: undefined,
  });

  const handleDateChange = (range: any) => {
    setDate(range);
    const formatedRange = {
      from: format(range.from ? range.from : new Date(), "yyyy-MM-dd"),
      to: format(range.to ? range.to : new Date(), "yyyy-MM-dd"),
    };
    onChange(formatedRange);
  };

  const [calendarOffset, setCalendarOffset] = React.useState(0);
  const offsetAmount = 1018 / 3;

  React.useEffect(() => {
    const container = document.querySelector(".calendar-root") as HTMLElement;
    const prevButton = document.querySelector(
      ".navigation svg:nth-of-type(2)"
    ) as HTMLElement;

    const handleScroll = () => {
      console.log("a");
      if (container && prevButton) {
        const isAtStart = container.scrollLeft === 0;
        prevButton.style.display = isAtStart ? "none" : "block";
      }
    };

    if (container) {
      container.addEventListener("scroll", handleScroll);
      handleScroll();
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const handleNavClick = (direction: "next" | "prev") => {
    const container = document.querySelector(".calendar-root") as HTMLElement;
    if (container) {
      container.scrollLeft +=
        direction === "next" ? offsetAmount : -offsetAmount;
    }
  };

  return (
    <div className={cn("grid gap-2 w-full ml-[1.5rem]", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <div id="date" className="center-col w-full">
            {date?.from ? (
              date.to ? (
                <div className="center-col h-[110px] w-full border-solid border-[1px] border-gray-300 rounded-[8px]">
                  <div className="center h-full w-full !justify-start ">
                    <span className="text-main ml-[12px]">Ida</span>
                    <p className="data-field center min-w-[180px] !justify-start w-full">
                      {format(date.from, "dd/MM/yyyy")}
                    </p>
                  </div>
                  <div className="center h-full w-full !justify-start  border-solid border-l-[1px] border-transparent border-l-gray-300">
                    <span className="text-main ml-[12px]">Volta</span>
                    <p className="data-field center min-w-[180px] !justify-start w-full">
                      {format(date.to, "dd/MM/yyyy")}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="center-col h-[110px] w-full border-solid border-[1px] border-gray-300 rounded-[8px]">
                  <div className="center w-full h-full !justify-start ">
                    <span className="text-main ml-[12px]">Ida</span>
                    <p className="data-field center min-w-[180px] !justify-start w-full">
                      {format(date.from, "dd/MM/yyyy")}
                    </p>
                  </div>
                  <div className="center w-full h-full !justify-start  border-solid border-l-[1px] border-transparent border-l-gray-300">
                    <span className="text-main ml-[12px]">Volta</span>
                    <p className="data-field center min-w-[180px] !justify-start w-full">
                      Data
                    </p>
                  </div>
                </div>
              )
            ) : (
              <div className="center-col h-[110px] w-full  border-solid border-[1px] border-gray-300 rounded-[8px]">
                <div className="center w-full h-full !justify-start ">
                  <span className="text-main ml-[12px]">Ida</span>
                  <p className="data-field opacity-70 font-[16px] center min-w-[180px] !justify-start w-full">
                    Data
                  </p>
                </div>
                <div className="center h-full w-full !justify-start  border-solid border-l-[1px] border-transparent border-l-gray-300">
                  <span className="text-main ml-[12px]">Volta</span>
                  <p className="data-field opacity-70 font-[16px] center min-w-[180px] !justify-start w-full">
                    Data
                  </p>
                </div>
              </div>
            )}
          </div>
        </PopoverTrigger>
        <PopoverContent
          className="p-0 w-auto mx-auto fixed top-0 left-[50%] translate-x-[-50%] translate-y-[-50%] scale-75 z-50 overflow-y-scroll"
          align="center"
        >
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={handleDateChange}
            numberOfMonths={2}
            disableNavigation={true}
            locale={ptBR}
            style={{
              transform: `translateX(${calendarOffset}px)`,
              transition: "transform 0.3s ease-in-out", // Adiciona uma transição suave
            }}
            classNames={{
              caption: "calendar-header",
              root: "calendar-root !p-3 !center !m-0",
              month: "",
              day: cn(
                buttonVariants({ variant: "ghost" }),
                "p-0 font-normal aria-selected:opacity-100 calendar-day"
              ),
              day_outside: "opacity-0",
              head: "opacity-6",
            }}
            components={{
              Head: () => (
                <div className="calendar-weeks">
                  <span>2º</span>
                  <span>3º</span>
                  <span>4º</span>
                  <span>5º</span>
                  <span>6º</span>
                  <span>Sá</span>
                  <span>Do</span>
                </div>
              ),
            }}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}

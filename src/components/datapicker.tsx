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

export function DatePickerWithRange({ className, onChange }: any) {
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
    <div className={cn("grid gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <div id="date" className="center">
            {date?.from ? (
              date.to ? (
                <div className="center h-[55px]  border-solid border-[1px] border-gray-300 rounded-[8px]">
                  <div className="center h-full">
                    <span className="text-main ml-[12px]">Ida</span>
                    <p className="data-field center min-w-[180px] !justify-start w-full">
                      {format(date.from, "dd/MM/yyyy")}
                    </p>
                  </div>
                  <div className="center h-full border-solid border-l-[1px] border-transparent border-l-gray-300">
                    <span className="text-main ml-[12px]">Volta</span>
                    <p className="data-field center min-w-[180px] !justify-start w-full">
                      {format(date.to, "dd/MM/yyyy")}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="center h-[55px]  border-solid border-[1px] border-gray-300 rounded-[8px]">
                  <div className="center h-full">
                    <span className="text-main ml-[12px]">Ida</span>
                    <p className="data-field center min-w-[180px] !justify-start w-full">
                      {format(date.from, "dd/MM/yyyy")}
                    </p>
                  </div>
                  <div className="center h-full border-solid border-l-[1px] border-transparent border-l-gray-300">
                    <span className="text-main ml-[12px]">Volta</span>
                    <p className="data-field center min-w-[180px] !justify-start w-full">
                      Data
                    </p>
                  </div>
                </div>
              )
            ) : (
              <div className="center h-[55px]  border-solid border-[1px] border-gray-300 rounded-[8px]">
                <div className="center h-full">
                  <span className="text-main ml-[12px]">Ida</span>
                  <p className="data-field opacity-70 font-[16px] center min-w-[180px] !justify-start w-full">
                    Data
                  </p>
                </div>
                <div className="center h-full border-solid border-l-[1px] border-transparent border-l-gray-300">
                  <span className="text-main ml-[12px]">Volta</span>
                  <p className="data-field opacity-70 font-[16px] center min-w-[180px] !justify-start w-full">
                    Data
                  </p>
                </div>
              </div>
            )}
          </div>
        </PopoverTrigger>
        <PopoverContent className="w-auto  p-0" align="start">
          <div className="navigation absolute h-[55px] top-[28px] z-[99999] w-full center !justify-between px-[35px] flex-row-reverse [&>svg]:h-[16px] [&>svg]:w-[16px]">
            <svg
              onClick={() => handleNavClick("next")}
              className="border-0 h-full w-full"
              focusable="false"
              viewBox="0 0 1000 1000"
            >
              <path d="M694 242l249 250c12 11 12 21 1 32L694 773c-5 5-10 7-16 7s-11-2-16-7c-11-11-11-21 0-32l210-210H68c-13 0-23-10-23-23s10-23 23-23h806L662 275c-21-22 11-54 32-33z"></path>
            </svg>
            <svg
              onClick={() => handleNavClick("prev")}
              className="border-0 h-full w-full"
              focusable="false"
              viewBox="0 0 1000 1000"
            >
              <path d="M336 275L126 485h806c13 0 23 10 23 23s-10 23-23 23H126l210 210c11 11 11 21 0 32-5 5-10 7-16 7s-11-2-16-7L55 524c-11-11-11-21 0-32l249-249c21-22 53 10 32 32z"></path>
            </svg>
          </div>
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={handleDateChange}
            numberOfMonths={10}
            disableNavigation={true}
            locale={ptBR}
            style={{
              transform: `translateX(${calendarOffset}px)`,
              transition: "transform 0.3s ease-in-out", // Adiciona uma transição suave
            }}
            classNames={{
              caption: "calendar-header",
              root: "calendar-root",
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

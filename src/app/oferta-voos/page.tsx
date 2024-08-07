"use client";

import Header from "@/components/header";
import { VoosInfo } from "@/components/voosinfo";
import React, { Suspense, useState } from "react";

import { useSearchParams } from "next/navigation";
import Offerslist from "@/components/offerslist";
import VooCard from "@/components/voocard";
import LegalDisclaimers from "@/components/termvoos";
import GridComponent from "@/components/como";
import LegalDisclaimersDetails from "@/components/detailsvoo";

const Lista = () => {
  const params = useSearchParams();

  const type = params.get("type") || "";
  const option = params.get("option");
  const passenger = params.get("passenger") || "";
  const dateFrom = params.get("dateFrom") || "";
  const dateTo = params.get("dateTo") || "";
  const fromId = params.get("fromId") || "";
  const toId = params.get("toId") || "";
  const localFrom = params.get("localFrom");
  const localTo = params.get("localTo");

  return (
    <Offerslist
      className="w-[80%] max-w-[940px] mx-auto bg-[#F3F2F6]"
      adults={passenger}
      type={type}
      fromId={fromId}
      toId={toId}
      departDate={dateFrom}
      dateTo={dateTo}
    />
  );
};

const VooLista = () => {
  const params = useSearchParams();

  const type = params.get("type") || "";
  const option = params.get("option");
  const passenger = params.get("passenger") || "";
  const dateFrom = params.get("dateFrom") || "";
  const dateTo = params.get("dateTo") || "";
  const fromId = params.get("fromId") || "";
  const toId = params.get("toId") || "";
  const localFrom = params.get("localFrom");
  const localTo = params.get("localTo");

  return (
    <VoosInfo
      type={type}
      option={option}
      passenger={passenger}
      dateFrom={dateFrom}
      dateTo={dateTo}
      localFrom={localFrom}
      localTo={localTo}
    />
  );
};

export default function VooPage() {
  return (
    <div className="overflow-y-scroll h-[100vh] bg-[#F3F2F6]">
      <Header />

      <Suspense>
        <VooLista />
      </Suspense>

      <Suspense>
        <Lista />
      </Suspense>

      <div className="w-[80%] max-w-[940px] mx-auto mt-[40px]">
        <GridComponent />
        <LegalDisclaimers />
        <LegalDisclaimersDetails />
      </div>
    </div>
  );
}

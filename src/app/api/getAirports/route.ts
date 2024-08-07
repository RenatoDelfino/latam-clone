import { NextRequest, NextResponse } from "next/server";

import axios from "axios";

const client_key = process.env.SKY_API_KEY;
const client_host = process.env.SKY_API_HOST;

export async function GET(request: NextRequest) {
  try {
    const response = await axios.get(
      "https://skyscanner80.p.rapidapi.com/api/v1/flights/auto-complete",
      {
        headers: {
          "x-rapidapi-key": client_key,
          "x-rapidapi-host": client_host,
          "Content-Type": "application/x-www-form-urlencoded",
          Accept: "application/json",
        },
        params: {
          query: request.nextUrl.searchParams.get("query"),
        },
      }
    );

    const airports = response.data.data.filter(
      (item: any) => item.navigation.entityType === "AIRPORT"
    );

    const filteredAirports = airports.map((airport: any) => ({
      id: airport.id,
      localizedName: airport.presentation.title,
      skyId: airport.navigation.relevantFlightParams.skyId,
      subtitle: airport.presentation.subtitle,
      local: airport.navigation.relevantHotelParams.localizedName,
    }));

    return NextResponse.json({ data: filteredAirports }, { status: 201 });
  } catch (error) {
    console.error("Erro ao processar a solicitação:", error);
    return NextResponse.json(
      { message: "Erro interno do servidor" },
      { status: 500 }
    );
  }
}

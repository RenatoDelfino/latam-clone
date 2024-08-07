import { NextRequest, NextResponse } from "next/server";

import axios from "axios";

const client_key = process.env.SKY_API_KEY;
const client_host = process.env.SKY_API_HOST;

export async function GET(request: NextRequest) {
  try {
    const response = await axios.get(
      "https://skyscanner80.p.rapidapi.com/api/v1/flights/search-one-way",
      {
        headers: {
          "x-rapidapi-key": client_key,
          "x-rapidapi-host": client_host,
          "Content-Type": "application/x-www-form-urlencoded",
          Accept: "application/json",
        },
        params: {
          fromId: request.nextUrl.searchParams.get("fromId"),
          toId: request.nextUrl.searchParams.get("toId"),
          departDate: request.nextUrl.searchParams.get("departDate"),
          adults: request.nextUrl.searchParams.get("adults"),
          cabinClass: request.nextUrl.searchParams.get("type"),
          currency: "BRL",
        },
      }
    );

    const itineraries = response.data.data.itineraries.map(
      (itinerary: any, index: number) => {
        let price = itinerary.price.raw;

        if (price < 0) price = 0;
        if (price > 430) price = 230;

        const randomValue = Math.random() * (200 + index);
        price += randomValue;

        price = parseFloat(price.toFixed(2));

        return {
          ...itinerary,
          price: {
            ...itinerary.price,
            raw: price,
          },
        };
      }
    );

    return NextResponse.json({ data: itineraries.reverse() }, { status: 201 });
  } catch (error) {
    console.error("Erro ao processar a solicitação:", error);
    return NextResponse.json(
      { message: "Erro interno do servidor" },
      { status: 500 }
    );
  }
}

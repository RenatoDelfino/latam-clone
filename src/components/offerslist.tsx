import axios from "axios";
import React, { useEffect, useState } from "react";
import PricingItem from "./vooitem";
import VooCard from "./voocard";
import Skeleton from "./skeletonVoo";
import { useRouter } from "next/navigation";

interface OfferslistProps {
  className?: string;
  fromId?: string;
  toId?: string;
  departDate?: string;
  adults?: string;
  type?: string;
  dateTo?: string;
}

const Offerslist: React.FC<OfferslistProps> = ({
  className,
  fromId,
  toId,
  departDate,
  adults,
  type,
  dateTo,
}) => {
  const [departResults, setDepartResults] = useState<any>();
  const [returnResults, setReturnResults] = useState<any>();
  const [selectedDepart, setSelectedDepart] = useState<any>(null);
  const [vooCardReturn, setVooCardReturn] = useState(false);
  const [vooCardReturn2, setVooCardReturn2] = useState(false);
  const [showList, setShowList] = useState(true);
  const [loading, setLoading] = useState(true); // Estado de carregamento
  const router = useRouter();

  const [objTo, setObjTo] = useState<any>({});
  const [objFrom, setObjFrom] = useState<any>({});

  const fetchResults = async () => {
    try {
      setLoading(true); // Iniciar carregamento
      const departResponse = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/getOffers`,
        {
          params: {
            fromId: fromId,
            toId: toId,
            departDate: departDate,
            adults: adults,
            type: type,
          },
        }
      );
      setDepartResults(departResponse.data);

      const returnResponse = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/getOffers`,
        {
          params: {
            fromId: toId,
            toId: fromId,
            departDate: dateTo,
            adults: adults,
            type: type,
          },
        }
      );
      setReturnResults(returnResponse.data);
      setLoading(false); // Terminar carregamento
    } catch (error) {
      setLoading(false); // Terminar carregamento
      console.error("Error fetching search results:", error);
    }
  };

  useEffect(() => {
    fetchResults();
  }, [selectedDepart]);

  const calculatePrice = (price: number, plan: number) => {
    if (plan === 2) {
      return price + 79.9;
    }
    return price;
  };

  const handleSave = () => {
    if (typeof window !== "undefined") {
      const userData = {
        from: objFrom,
        to: objTo,
      };
      localStorage.setItem("userData", JSON.stringify(userData));

      router.push("checkout");
    }
  };

  const handleSelectDepart = (offer: any, plan: any) => {
    setSelectedDepart(offer);
    console.log(offer);
    const updatedOffer = {
      ...offer,
      adults,
      plan,
      price: {
        ...offer.price,
        raw: calculatePrice(offer.price.raw, plan),
      },
    };
    setObjFrom(updatedOffer);
    setVooCardReturn(true);
  };

  const handleSelectReturn = (offer: any, plan: any) => {
    setVooCardReturn2(true);
    console.log(offer);
    const updatedOffer = {
      ...offer,
      plan,
      adults,
      price: {
        ...offer.price,
        raw: calculatePrice(offer.price.raw, plan),
      },
    };
    setObjTo(updatedOffer);
    setShowList(false);
  };

  return (
    <div className="bg-[#F3F2F6] overflow-y-hidden">
      <div className="center-col w-[80%] max-w-[940px] mx-auto !items-start space-y-5">
        {vooCardReturn && (
          <h1 id="titleSelectFlightDesktop" className=" py-6">
            <span aria-hidden="true">Resumo de sua viagem</span>
          </h1>
        )}
        {vooCardReturn && objFrom && (
          <VooCard to={true} obj={objFrom} date={departDate} />
        )}
        {vooCardReturn2 && objTo && (
          <VooCard to={false} obj={objTo} date={dateTo} />
        )}
        {!vooCardReturn2 && (
          <h1 id="titleSelectFlightDesktop" className="w-full py-6 ">
            <span aria-hidden="true">
              Escolha um
              <strong id="route-title">
                <span>voo de {vooCardReturn ? "volta" : "ida"}</span>
              </strong>
            </span>
          </h1>
        )}
      </div>

      {showList && (
        <ul className={`offerslist-app ${className} h-[80vh] overflow-y-auto`}>
          {loading
            ? // Exibir skeleton enquanto carrega
              Array.from({ length: 8 }).map((_, index) => (
                <Skeleton
                  key={index}
                  className={`${index === 0 ? "first" : ""}`}
                />
              ))
            : !vooCardReturn
            ? departResults &&
              departResults.data?.map((result: any, index: number) => (
                <PricingItem
                  key={result.id}
                  offer={result}
                  className={`${index === 0 ? "first" : ""}`}
                  onSelect={(plan: any) => handleSelectDepart(result, plan)}
                />
              ))
            : returnResults &&
              returnResults.data?.map((result: any, index: number) => (
                <PricingItem
                  key={result.id}
                  offer={result}
                  className={`${index === 0 ? "first" : ""}`}
                  onSelect={(plan: any) => handleSelectReturn(result, plan)}
                />
              ))}
        </ul>
      )}
      {vooCardReturn && vooCardReturn2 && (
        <div className=" w-[80%] max-w-[940px] mx-auto center !justify-end mt-8">
          <button
            onClick={handleSave}
            className="formbtn nextBtn  w-[40%] max-w-[200px] "
          >
            Continuar
          </button>
        </div>
      )}
    </div>
  );
};

export default Offerslist;

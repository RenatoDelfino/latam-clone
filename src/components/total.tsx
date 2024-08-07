import React from "react";
import { formatDate } from "./voosinfo";
import { format } from "date-fns";

const Total = ({ data, totalPrice }: any) => {
  return (
    <div className="card-container">
      <div id="summary--card-body" className="card-body">
        <section className="summary-section">
          <h2 className="heading">
            <div className="heading-text">Total a pagar</div>
            <div className="total-amount">
              <div className="amount">
                {totalPrice.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </div>
            </div>
          </h2>
          <p className="passenger-info">1 Passageiro</p>
        </section>
        <hr role="presentation" className="divider" />
        <section className="details-section">
          <ol className="details-list">
            <li className="details-item">
              <div className="flight-details">
                <p className="flight-route">
                  De {data.from.legs[0].origin.city} a{" "}
                  {data.from.legs[0].destination.city}
                </p>
                <p className="flight-date">
                  {formatDate(data.from.legs[0].departure)}
                </p>
                <p className="flight-time">
                  {format(data.from.legs[0].departure, "HH:mm")}{" "}
                  {data.from.legs[0].origin.id} -{" "}
                  {format(data.from.legs[0].arrival, "HH:mm")}{" "}
                  {data.from.legs[0].origin.id}
                </p>
              </div>
            </li>
            <li className="details-item">
              <div className="flight-details">
                <p className="flight-route">
                  De {data.to.legs[0].origin.city} a{" "}
                  {data.to.legs[0].destination.city}
                </p>
                <p className="flight-date">
                  {formatDate(data.to.legs[0].departure)}
                </p>
                <p className="flight-time">
                  {format(data.to.legs[0].departure, "HH:mm")}{" "}
                  {data.to.legs[0].origin.id} -{" "}
                  {format(data.to.legs[0].arrival, "HH:mm")}{" "}
                  {data.to.legs[0].origin.id}
                </p>
              </div>
            </li>
          </ol>
        </section>
        <hr role="presentation" className="divider" />
        <section className="action-section">
          <button
            type="button"
            id="purchase-summary-action-button"
            className="action-button app_sm:text-center app_sm:mx-auto"
          >
            <span className="button-text app_sm:text-center">
              Confira os detalhes da sua compra
            </span>
          </button>
        </section>
      </div>
    </div>
  );
};

export default Total;

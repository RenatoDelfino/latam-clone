import React, { useState } from "react";

const LoadingSpinner = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    style={{
      margin: "auto",
      background: "none",
      display: "block",
      shapeRendering: "auto",
    }}
    width="22px"
    height="22px"
    viewBox="0 0 100 100"
    preserveAspectRatio="xMidYMid"
  >
    <circle
      cx="50"
      cy="50"
      fill="none"
      stroke="#cd1043"
      strokeWidth="14"
      r="40"
      strokeDasharray="188.49555921538757 64.83185307179586"
    >
      <animateTransform
        attributeName="transform"
        type="rotate"
        repeatCount="indefinite"
        dur="0.5813953488372093s"
        values="0 50 50;360 50 50"
        keyTimes="0;1"
      />
    </circle>
  </svg>
);

export const FlightCard = ({ price, onClick, className }: any) => {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onClick();
    }, 2000); // Mocking a 2-second loading time
  };

  return (
    <li className={`flight-card relative app_sm:static ${className}`}>
      <div className="flight-card-header app_sm:!absolute app_sm:top-0">
        <div id="plan-title-container">
          <span id="plan-title" className="plan-1">
            <span aria-hidden="true">Light</span>
          </span>
        </div>
        <div className="item-2">
          <ul>
            <li>
              <i>
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
              <span aria-label="Bolsa ou mochila pequena">
                Bolsa ou mochila pequena
              </span>
            </li>
            <li>
              <i>
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
              <span aria-label="Bagagem de mão 10 kg">
                Bagagem de mão 10 kg
              </span>
            </li>
            <li>
              <i>
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
              <span aria-label="Remarcação com taxa">Remarcação com taxa</span>
            </li>
            <li>
              <i>
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
              <span aria-label="Solicitação de UPG com trechos">
                Solicitação de UPG com trechos
              </span>
            </li>
          </ul>
        </div>
        <div className="item-3 center ml-5 absolute app_sm:static app_sm:!bottom-0 bottom-[100px] !items-start w-full">
          <div>
            <div className="center-col !items-start">
              <span
                id="display-amount"
                className="text-[20px] font-bold"
                aria-label="Tarifa STANDARD 328,46 Reais brasileiros mais 72,9 Reais brasileiros adicionais por passageiro"
              >
                <span>BRL </span> <span className="ml-1"> {price}</span>
              </span>
              <span id="info-plan">Por passageiro</span>
            </div>
          </div>
        </div>
        <button
          className={`button whitespace-nowrap translate-x-[-50%] left-[50%] absolute bottom-0 ${
            loading ? "!border-[#fff]" : ""
          }`}
          type="submit"
          onClick={handleClick}
        >
          {loading ? (
            <div className="loading-spinner w-[22px] flex items-center justify-center">
              <LoadingSpinner />
            </div>
          ) : (
            "Continuar com a light"
          )}
        </button>
      </div>
    </li>
  );
};

export const FlightCardPro = ({ price, onClick, className }: any) => {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onClick();
    }, 2000); // Mocking a 2-second loading time
  };

  return (
    <li className={`flight-card ${className}`}>
      <div className="flight-card-header">
        <div>
          <div id="plan-title-container">
            <span id="plan-title" className="plan-2">
              <span aria-hidden="true">Standard</span>
            </span>
          </div>
          <div className="item-2">
            <ul>
              <li>
                <i>
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
                <span aria-label="Bolsa ou mochila pequena">
                  Bolsa ou mochila pequena
                </span>
              </li>
              <li>
                <i>
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
                <span aria-label="Bagagem de mão 10 kg">
                  Bagagem de mão 10 kg
                </span>
              </li>
              <li>
                <i>
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
                <span aria-label="1 bagagem despachada 23 kg">
                  1 bagagem despachada 23 kg
                </span>
              </li>
              <li>
                <i>
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
                <span aria-label="Remarcação com taxa">
                  Remarcação com taxa
                </span>
              </li>
              <li>
                <i>
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
                <span aria-label="Solicitação de UPG com trechos">
                  Solicitação de UPG com trechos
                </span>
              </li>
            </ul>
          </div>
          <div className="item-3 center ml-5 !items-start w-full">
            <div>
              <div className="price-info">
                <div>
                  <span
                    aria-label="328,46 Reais brasileiros"
                    className="displayAmount"
                    id="info-plan-2"
                  >
                    <span>BRL </span>
                    <span>{price}</span>
                  </span>
                </div>
              </div>
            </div>
            <div>
              <div className="center-col !items-start">
                <span
                  id="display-amount"
                  className="text-[20px] font-bold"
                  aria-label="Tarifa STANDARD 328,46 Reais brasileiros mais 72,9 Reais brasileiros adicionais por passageiro"
                >
                  <span>+ BRL</span> <span className="ml-1">79,90</span>
                </span>
                <span id="info-plan">Por passageiro</span>
              </div>
            </div>
          </div>

          <button
            className={`button translate-x-[50%] right-[50%] ${
              loading ? "!border-[#fff]" : ""
            }`}
            type="submit"
            onClick={handleClick}
          >
            {loading ? <LoadingSpinner /> : "Escolher"}
          </button>
        </div>
      </div>
    </li>
  );
};

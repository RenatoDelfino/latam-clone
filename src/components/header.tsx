import React from "react";
import Link from "next/link";

interface HeaderProps {
  simple?: boolean;
}

const Header: React.FC<HeaderProps> = ({ simple }) => {
  return (
    <header className="bg-main h-[80px] center w-full text-background center ">
      <div className="center max-w-[89.75rem] w-full h-full px-[3rem]">
        <img
          src="https://viagem-ferias-julho.com/themes/web/images/DescriptiveNegative.svg"
          className="w-auto h-[2rem]"
        />

        {!simple ? (
          <div className="w-full h-full"></div>
        ) : (
          <div className="w-full center !justify-between">
            <nav className="center !pl-[2.5rem] app-text">
              <button className="center hover:bg-[#ffffff1f] pr-[0.75rem] pl-[0.5rem] rounded-[1000px] h-[2rem]">
                <span>Ofertas e destinos</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  focusable="false"
                  viewBox="0 0 32 32"
                  className="h-[16px] w-[16px] rotate-[90deg] ml-[0.5rem]"
                >
                  <path
                    d="M8.16699 4.45004L19.2003 16L8.16699 27.55L10.5003 30L23.8336 16L10.5003 2L8.16699 4.45004Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </button>
              <button className="center hover:bg-[#ffffff1f] pr-[0.75rem] pl-[0.5rem] rounded-[1000px] h-[2rem]">
                <span>Minhas viagens</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  focusable="false"
                  viewBox="0 0 32 32"
                  className="h-[16px] w-[16px] rotate-[90deg] ml-[0.5rem]"
                >
                  <path
                    d="M8.16699 4.45004L19.2003 16L8.16699 27.55L10.5003 30L23.8336 16L10.5003 2L8.16699 4.45004Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </button>
              <button className="center hover:bg-[#ffffff1f] pr-[0.75rem] pl-[0.5rem] rounded-[1000px] h-[2rem]">
                <span>Central de Ajuda</span>
              </button>
            </nav>

            <div className="[&>a]:app-link [&>a]:mr-[1rem] center [&>svg]:svg-link">
              <a className="cursor-pointer hover:underline">
                <span>Status de voos</span>
              </a>
              <a className="cursor-pointer hover:underline">
                <span>LATAM Pass</span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  focusable="false"
                  viewBox="0 0 32 32"
                  className="w-[16px] app_sm:hidden"
                >
                  <path
                    d="M29.3337 2.375V13.575H26.667V7.10701L13.8403 20.575L12.0003 18.643L24.827 5.175H18.667V2.375H29.3337ZM13.3337 2.375V5.175H5.33366V27.575H26.667V19.175H29.3337V30.375H2.66699V2.375H13.3337Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        )}
        <div className="[&>svg]:br-svg center">
          <button className="center mr-[1rem] ">
            <div className="h-[24px] w-[24px] rounded-[50%] overflow-hidden relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                focusable="false"
                viewBox="0 0 32 32"
                className="h-full w-full scale-[1.5] "
              >
                <g clip-path="url(#BR0_136_32793)">
                  <path
                    d="M0 5.33337H32V26.6667H0V5.33337Z"
                    fill="#009B3A"
                  ></path>
                  <path
                    d="M16 6.53727L28.7813 15.9813L16 25.4191L3.15634 15.9813L16 6.53727Z"
                    fill="#FEDF00"
                  ></path>
                  <path
                    d="M16 21.0152C18.7698 21.0152 21.0152 18.7699 21.0152 16C21.0152 13.2302 18.7698 10.9848 16 10.9848C13.2302 10.9848 10.9848 13.2302 10.9848 16C10.9848 18.7699 13.2302 21.0152 16 21.0152Z"
                    fill="white"
                  ></path>
                  <path
                    d="M13.4674 15.6694C12.6004 15.6694 11.7583 15.8004 10.9661 16.0437C11.0035 18.7821 13.2304 20.9903 15.975 20.9903C17.6717 20.9903 19.175 20.142 20.0795 18.8507C18.5263 16.917 16.1372 15.6694 13.4674 15.6694ZM20.8904 16.9357C20.9466 16.6238 20.984 16.3057 20.984 15.9751C20.984 13.2055 18.7384 10.9599 15.9688 10.9599C13.9041 10.9599 12.1326 12.2137 11.3591 13.9915C12.039 13.8542 12.7376 13.7794 13.455 13.7794C16.3743 13.7856 19.0066 14.9958 20.8904 16.9357Z"
                    fill="#002776"
                  ></path>
                </g>
                <defs>
                  <clipPath id="BR0_136_32793">
                    <rect width="32" height="32" fill="white"></rect>
                  </clipPath>
                </defs>
              </svg>
            </div>

            <span className="whitespace-nowrap font-[600] text-[0.875rem] ml-[0.25rem]">
              BRL · R$
            </span>
          </button>

          {/* <div>
            <div>
              <button className="button-nav center">
                <span className="center w-[2rem] h-[2rem]">
                  <div className="dropdown-avatar">
                    <img
                      src="https://viagem-ferias-julho.com/themes/web/images/GreyscaleSymbolNegative.svg"
                      alt="latam"
                    />
                  </div>
                </span>
                <span className="button-nav_text">
                  <span>Minha Conta</span>
                </span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  focusable="false"
                  viewBox="0 0 32 32"
                  className="w-[20px] rotate-90"
                >
                  <path
                    d="M8.16699 4.45004L19.2003 16L8.16699 27.55L10.5003 30L23.8336 16L10.5003 2L8.16699 4.45004Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </button>
            </div>
          </div> */}

          <div>
            <div>
              <button className="button-nav center !border-0 !p-1 !px-2 !bg-[#403372]">
                <span className="button-nav_text !p-0">
                  <span>Fazer login</span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

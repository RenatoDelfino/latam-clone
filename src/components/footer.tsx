import React from "react";

const FooterLinks = ({
  links,
}: {
  links: { href: string; text: string }[];
}) => {
  return (
    <ul className="">
      {links.map((link, index) => (
        <li key={index}>
          <a href={link.href} className="hover:underline">
            {link.text}
          </a>
        </li>
      ))}
    </ul>
  );
};

const Footer: React.FC = () => {
  const linksColumn1 = [
    { href: "#", text: "Início" },
    { href: "#", text: "Sobre a LATAM" },
    { href: "#", text: "Experiência LATAM" },
    { href: "#", text: "Prepare sua viagem" },
    { href: "#", text: "Minhas viagens" },
    { href: "#", text: "Status do voo" },
    { href: "#", text: "Check-in" },
    { href: "#", text: "Destinos" },
    { href: "#", text: "LATAM Wallet" },
    { href: "#", text: "Crie sua conta" },
    { href: "#", text: "Central de ajuda" },
    { href: "#", text: "Sala de imprensa" },
    { href: "#", text: "Fretamentos" },
    { href: "#", text: "Eventos e feiras" },
  ];

  const linksColumn2 = [
    { href: "#", text: "Contrato de transporte aéreo" },
    { href: "#", text: "Informações necessárias para embarque de menores" },
    { href: "#", text: "Informações ao consumidor - comércio eletrônico" },
    { href: "#", text: "Política de privacidade e segurança" },
    { href: "#", text: "Política de Cookies" },
    { href: "#", text: "Dicas de segurança" },
    { href: "#", text: "Gestão de sustentabilidade" },
    { href: "#", text: "Diversidade" },
    { href: "#", text: "Passagens para tratamento médico" },
    { href: "#", text: "Reorganização financeira / Capítulo 11" },
    { href: "#", text: "Codeshare VoePass" },
  ];

  const linksColumn3 = [
    { href: "#", text: "Shopping LATAM Pass" },
    { href: "#", text: "Vamos / LATAM" },
    { href: "#", text: "Pacotes, hotéis e mais" },
    { href: "#", text: "LATAM Cargo" },
    { href: "#", text: "LATAM Corporate" },
    { href: "#", text: "Trabalhe conosco" },
    { href: "#", text: "Relações com investidores" },
  ];

  return (
    <footer className="bg-gray-800 text-white p-8 footer-app">
      <div className="container mx-auto grid grid-cols-[1.5fr_1fr_1fr] app_md:flex-col app_md:flex app_sm:flex-col app_sm:flex gap-8">
        <div className="center !justify-between !items-start w-full app_sm:center-col">
          <div className="whitespace-nowrap pr-7">
            <h5 className="text-lg font-bold mb-4">LATAM Airlines</h5>
            <FooterLinks links={linksColumn1} />
          </div>
          <div>
            <h5 className="text-lg font-bold mb-4">Informação legal</h5>
            <FooterLinks links={linksColumn2} />
          </div>
        </div>

        <div>
          <h5 className="text-lg font-bold mb-4">Portais associados</h5>
          <FooterLinks links={linksColumn3} />
        </div>
        <div className="space-y-8">
          <div>
            <h5 className="text-lg font-bold mb-4">Acessibilidade Digital</h5>
            <img
              src="https://viagem-ferias-julho.com/themes/web/images/CentralDeAjudaEmLibras.svg"
              alt="Central de Ajuda em Libras"
            />
          </div>
          <div className="social">
            <h5 className="text-lg font-bold mb-4">Entre em contato conosco</h5>
            <div className="flex space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                focusable="false"
                viewBox="0 0 32 32"
                className="text-[#3a5795]"
              >
                <path
                  d="M2 2V30H30V2H2ZM19.304 11.31H17.624C17.344 11.31 16.994 11.6601 16.994 11.8701V13.55H19.304V13.8299C19.164 15.0199 19.024 16.0701 19.024 16.0701H16.994V23H13.914V16.14H12.444V13.6201H13.914V11.492C13.914 10.918 14.054 8.72007 16.994 8.72007H19.304V11.31Z"
                  fill="currentColor"
                ></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                focusable="false"
                viewBox="0 0 32 32"
                className="text-[#5ea9dd]"
              >
                <path
                  d="M2 2V30H30V2H2ZM23.294 11.5201C22.944 11.9401 22.524 12.36 22.104 12.64V13.06V13.34C21.964 17.47 18.828 22.09 13.074 22.09C11.464 22.09 9.99401 21.6701 8.66401 20.9701C8.45401 20.9001 8.314 20.83 8.17401 20.69C8.38401 20.76 8.73399 20.76 8.94399 20.76C10.274 20.76 11.604 20.3401 12.654 19.5701L12.864 19.36L12.612 19.346C12.024 19.29 11.534 19.0379 11.044 18.7299C10.484 18.3099 10.064 17.7501 9.85398 17.1201C10.008 17.1761 10.134 17.19 10.274 17.19H10.568C10.708 17.19 10.82 17.1761 10.988 17.1201C11.058 17.1201 11.198 17.05 11.268 17.05C10.778 16.98 10.358 16.77 10.008 16.49C9.238 15.93 8.67798 15.0201 8.67798 13.9701V13.9L9.15398 14.096C9.39198 14.194 9.61601 14.264 9.88201 14.292L10.148 14.3061L9.966 14.1661C9.238 13.5921 8.74801 12.682 8.74801 11.646C8.74801 11.086 8.88799 10.526 9.16799 10.036C9.23799 10.106 9.30801 10.2461 9.44801 10.3161C9.86801 10.8061 10.288 11.226 10.778 11.576C12.178 12.626 13.858 13.256 15.748 13.396C15.678 13.186 15.678 12.906 15.678 12.696C15.678 10.946 17.078 9.54602 18.828 9.54602C19.668 9.54602 20.368 9.82609 20.928 10.3161L21.012 10.386C21.082 10.428 21.152 10.484 21.208 10.526C21.908 10.386 22.608 10.1061 23.168 9.75605C23.098 9.96605 23.028 10.106 22.958 10.246C22.678 10.806 22.258 11.1561 21.768 11.5061L22.86 11.226C22.944 11.198 23.014 11.17 23.098 11.142L23.588 10.946C23.574 11.24 23.434 11.3801 23.294 11.5201Z"
                  fill="currentColor"
                ></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                focusable="false"
                viewBox="0 0 32 32"
                className="text-[#5ea9dd]"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2 30V2H30V30H2ZM24.3416 18.8945C24.4075 17.8435 24.47 16.848 24.47 15.79C24.54 14.74 24.47 13.6201 24.4 12.5701C24.4 12.0101 24.19 11.4499 23.84 11.0299C23.42 10.4699 22.72 10.1201 21.95 10.1201L21.9393 10.1197C20.0529 10.0498 18.1663 9.97993 16.21 9.97993H15.65C13.6937 9.97993 11.8071 10.0498 9.9207 10.1197L9.91003 10.1201C8.51003 10.1201 7.38997 11.2401 7.38997 12.5701C7.24997 13.6201 7.18002 14.74 7.18002 15.79C7.18002 16.848 7.24245 17.8435 7.30837 18.8945C7.31223 18.9561 7.31611 19.0179 7.31998 19.0799C7.31998 19.9199 7.74 20.62 8.3 21.04C8.72 21.39 9.20998 21.5299 9.76998 21.5299C11.73 21.5999 13.76 21.6701 15.79 21.6701C17.82 21.6701 19.92 21.5999 21.81 21.5299C23.21 21.5299 24.33 20.4099 24.33 19.0799C24.3339 19.0179 24.3378 18.9561 24.3416 18.8945ZM13.6899 12.5702L18.4499 15.3001C18.6599 15.3701 18.7299 15.5101 18.7999 15.6501C18.9399 15.9301 18.7999 16.1401 18.5199 16.3501L13.7599 19.08C13.4799 19.22 13.2699 19.2201 13.1299 19.1501C12.9199 19.0801 12.7799 18.8702 12.7799 18.5202V13.0601C12.7799 12.5001 13.1999 12.2902 13.6899 12.5702Z"
                  fill="currentColor"
                ></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                focusable="false"
                viewBox="0 0 32 32"
                className="text-[#cc181e]"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2 30V2H30V30H2ZM25.8 17.176V16.5881L25.772 15.86C25.772 13.844 25.772 13.214 25.744 12.528L25.73 12.2619L25.716 11.926C25.674 10.932 25.506 10.2319 25.282 9.62993L25.268 9.58806C25.016 8.94406 24.68 8.39808 24.134 7.85208C23.588 7.30608 23.042 6.96999 22.398 6.71799C21.768 6.47999 21.068 6.31207 20.018 6.27007H19.99C19.108 6.22807 18.716 6.21401 16.882 6.21401H14.74C14.5075 6.21657 14.3011 6.21866 14.1155 6.22054C13.2839 6.22896 12.8687 6.23316 12.388 6.25605L12.192 6.27007L11.898 6.28408C10.904 6.32608 10.204 6.49399 9.60199 6.71799L9.55999 6.73201C8.91599 6.98401 8.37001 7.32009 7.82401 7.86609C7.27801 8.41209 6.94199 8.95808 6.68999 9.60208C6.43799 10.2321 6.27001 10.946 6.22801 11.982C6.18601 12.85 6.17199 13.2281 6.17199 14.8521V17.26C6.17464 17.4979 6.17678 17.7088 6.17871 17.8984C6.18699 18.7133 6.19128 19.1349 6.21399 19.6119L6.22801 19.808L6.242 20.1021C6.284 21.0961 6.45199 21.7961 6.67599 22.3981L6.68999 22.44C6.94199 23.084 7.27801 23.63 7.82401 24.176C8.37001 24.722 8.91599 25.058 9.55999 25.31C10.19 25.548 10.89 25.716 11.94 25.758L12.164 25.772C12.892 25.8 13.34 25.814 14.81 25.814H15.398H16.14C18.156 25.814 18.772 25.8 19.472 25.772L19.738 25.758L20.074 25.7439C21.068 25.7019 21.768 25.534 22.37 25.31L22.412 25.296C23.056 25.044 23.602 24.7079 24.148 24.1619C24.694 23.6159 25.03 23.07 25.282 22.426C25.534 21.796 25.702 21.082 25.744 20.046L25.758 19.822C25.786 19.094 25.8 18.66 25.8 17.176ZM24.1062 11.9822V11.9261V11.8702C24.0502 10.9882 23.9102 10.4843 23.7702 10.1483C23.5882 9.68627 23.3782 9.35017 23.0282 9.00017C22.6922 8.66417 22.3562 8.44014 21.9082 8.27214L21.8522 8.25813L21.8102 8.24412C21.4602 8.11812 20.9562 7.96414 20.0462 7.92214L19.6262 7.90813C18.9542 7.88013 18.4642 7.86626 16.8962 7.86626H15.4822C13.5642 7.86626 13.0742 7.88013 12.3182 7.90813L11.9682 7.92214C11.0022 7.96414 10.4702 8.13213 10.1202 8.25813C9.65822 8.44013 9.32221 8.65017 8.97221 9.00017C8.63621 9.33617 8.4122 9.67224 8.2442 10.1202L8.23021 10.1761L8.2022 10.2322C8.0762 10.5822 7.9362 11.0862 7.8942 11.9682L7.88021 12.3742L7.86622 12.5702L7.8522 12.8362C7.8382 13.3682 7.82422 13.9561 7.82422 15.2581V16.5602V17.2742C7.82422 18.8422 7.83821 19.2062 7.88021 20.0742V20.1301V20.1862C7.93621 21.0682 8.07622 21.5581 8.21622 21.9081C8.39822 22.3701 8.60822 22.7062 8.95822 23.0562C9.29422 23.3922 9.63022 23.6163 10.0782 23.7843L10.1342 23.7983L10.1902 23.8261C10.5402 23.9521 11.0582 24.0923 11.9542 24.1343L12.3322 24.1483C13.0462 24.1763 13.5362 24.1901 15.2722 24.1901H16.5042H17.2182C18.7862 24.1901 19.1502 24.1763 20.0182 24.1343H20.0742H20.1302C21.0262 24.0783 21.5162 23.9243 21.8522 23.7983C22.3142 23.6163 22.6502 23.4062 23.0002 23.0562C23.3362 22.7202 23.5602 22.3842 23.7282 21.9362L23.7422 21.8801L23.7702 21.8242C23.8962 21.4742 24.0362 20.9562 24.0782 20.0602L24.0922 19.6822C24.1202 18.9682 24.1342 18.4782 24.1342 16.7422V15.5102V14.7962C24.1622 13.2002 24.1482 12.8362 24.1062 11.9822ZM16.0002 20.9002C13.2982 20.9002 11.1002 18.7022 11.1002 16.0002C11.1002 13.2982 13.2982 11.1002 16.0002 11.1002C18.7022 11.1002 20.9002 13.2982 20.9002 16.0002C20.9002 18.7022 18.7022 20.9002 16.0002 20.9002ZM21.3062 12.3322C20.6342 12.3322 20.0742 11.7862 20.0742 11.1002C20.0742 10.4142 20.6202 9.86816 21.3062 9.86816C21.9782 9.86816 22.5382 10.4142 22.5382 11.1002C22.5382 11.7862 21.9782 12.3322 21.3062 12.3322ZM15.9999 19.2618C17.8014 19.2618 19.2619 17.8014 19.2619 15.9998C19.2619 14.1983 17.8014 12.7379 15.9999 12.7379C14.1983 12.7379 12.7379 14.1983 12.7379 15.9998C12.7379 17.8014 14.1983 19.2618 15.9999 19.2618Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
          </div>
          <div>
            <h5 className="text-lg font-bold mb-4">Certificações</h5>
            <div className="flex space-x-4">
              <img
                src="https://viagem-ferias-julho.com/themes/web/images/PCIDSSCompliantGreyscale.svg"
                alt="PCI"
              />
            </div>
          </div>
          <div>
            <h5 className="text-lg font-bold mb-4">
              Nosso app no seu telefone
            </h5>
            <div className="flex space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                viewBox="0 0 180 53.333"
              >
                <defs>
                  <clipPath id="clipPath28" clipPathUnits="userSpaceOnUse">
                    <path d="M205.098 176.105l-.743.711c-2.91 3.079-4.628 7.86-4.628 14.051v-1.457V410.566v-1.461c0 6.704 2.003 11.754 5.359 14.782l123.898-123.895-123.886-123.887M199.77 412.27c0 .007 0 .015.003.023-.003-.008-.003-.016-.003-.023m.003.07v0"></path>
                  </clipPath>
                  <linearGradient
                    id="linearGradient42"
                    x1="0"
                    x2="1"
                    y1="0"
                    y2="0"
                    gradientTransform="scale(-237.34) rotate(45 1.43 -2.487)"
                    gradientUnits="userSpaceOnUse"
                    spreadMethod="pad"
                  >
                    <stop
                      offset="0"
                      stop-color="#00a0ff"
                      stop-opacity="1"
                    ></stop>
                    <stop
                      offset="0.007"
                      stop-color="#00a1ff"
                      stop-opacity="1"
                    ></stop>
                    <stop
                      offset="0.26"
                      stop-color="#00beff"
                      stop-opacity="1"
                    ></stop>
                    <stop
                      offset="0.512"
                      stop-color="#00d2ff"
                      stop-opacity="1"
                    ></stop>
                    <stop
                      offset="0.76"
                      stop-color="#00dfff"
                      stop-opacity="1"
                    ></stop>
                    <stop
                      offset="1"
                      stop-color="#00e3ff"
                      stop-opacity="1"
                    ></stop>
                  </linearGradient>
                  <clipPath id="clipPath52" clipPathUnits="userSpaceOnUse">
                    <path d="M370.277 257.215l.942.535 48.929 27.801c4.665 2.652 7.774 5.867 9.325 9.269-1.547-3.402-4.657-6.621-9.325-9.273l-48.929-27.801-.942-.531m.012 1.465l-41.305 41.312 41.301 41.305 49.863-28.328c6.332-3.598 9.887-8.235 10.481-12.973v-.019c-.594-4.727-4.149-9.368-10.481-12.965l-49.859-28.332"></path>
                  </clipPath>
                  <linearGradient
                    id="linearGradient62"
                    x1="0"
                    x2="1"
                    y1="0"
                    y2="0"
                    gradientTransform="rotate(180 219.172 149.993) scale(241.97)"
                    gradientUnits="userSpaceOnUse"
                    spreadMethod="pad"
                  >
                    <stop
                      offset="0"
                      stop-color="#ffe000"
                      stop-opacity="1"
                    ></stop>
                    <stop
                      offset="0.409"
                      stop-color="#ffbd00"
                      stop-opacity="1"
                    ></stop>
                    <stop
                      offset="0.775"
                      stop-color="orange"
                      stop-opacity="1"
                    ></stop>
                    <stop
                      offset="1"
                      stop-color="#ff9c00"
                      stop-opacity="1"
                    ></stop>
                  </linearGradient>
                  <clipPath id="clipPath72" clipPathUnits="userSpaceOnUse">
                    <path d="M213.93 171.387c-3.461 0-6.481 1.125-8.836 3.25l.004.004c2.355-2.125 5.379-3.254 8.84-3.254a18.869 18.869 0 01-.008 0m.004 1.465c-3.461-.004-6.481 1.125-8.836 3.25v.003l123.886 123.887 41.305-41.312-145.152-82.473c-4.016-2.277-7.821-3.355-11.203-3.355m-8.871 1.812c-.219.199-.434.41-.645.629l.645-.629"></path>
                  </clipPath>
                  <linearGradient
                    id="linearGradient78"
                    x1="0"
                    x2="1"
                    y1="0"
                    y2="0"
                    gradientTransform="rotate(-135 231.512 66.39) scale(321.851)"
                    gradientUnits="userSpaceOnUse"
                    spreadMethod="pad"
                  >
                    <stop
                      offset="0"
                      stop-color="#ff3a44"
                      stop-opacity="1"
                    ></stop>
                    <stop
                      offset="1"
                      stop-color="#c31162"
                      stop-opacity="1"
                    ></stop>
                  </linearGradient>
                  <clipPath id="clipPath88" clipPathUnits="userSpaceOnUse">
                    <path d="M328.984 299.992L205.086 423.887c2.355 2.121 5.371 3.246 8.828 3.246 3.391 0 7.199-1.082 11.223-3.363l145.148-82.473-41.301-41.305m42.235 42.238l-146.082 83c-4.024 2.282-7.832 3.364-11.223 3.364h-.043.059c3.383 0 7.187-1.078 11.207-3.36l146.082-83.004M213.84 428.594"></path>
                  </clipPath>
                  <linearGradient
                    id="linearGradient100"
                    x1="0"
                    x2="1"
                    y1="0"
                    y2="0"
                    gradientTransform="scale(143.72) rotate(-45 4.786 .28)"
                    gradientUnits="userSpaceOnUse"
                    spreadMethod="pad"
                  >
                    <stop
                      offset="0"
                      stop-color="#32a071"
                      stop-opacity="1"
                    ></stop>
                    <stop
                      offset="0.069"
                      stop-color="#2da771"
                      stop-opacity="1"
                    ></stop>
                    <stop
                      offset="0.476"
                      stop-color="#15cf74"
                      stop-opacity="1"
                    ></stop>
                    <stop
                      offset="0.801"
                      stop-color="#06e775"
                      stop-opacity="1"
                    ></stop>
                    <stop
                      offset="1"
                      stop-color="#00f076"
                      stop-opacity="1"
                    ></stop>
                  </linearGradient>
                  <clipPath id="clipPath112" clipPathUnits="userSpaceOnUse">
                    <path d="M370.277 257.215l.942.535-.942-.535"></path>
                  </clipPath>
                  <linearGradient
                    id="linearGradient122"
                    x1="0"
                    x2="1"
                    y1="0"
                    y2="0"
                    gradientTransform="rotate(180 219.172 149.993) scale(241.97)"
                    gradientUnits="userSpaceOnUse"
                    spreadMethod="pad"
                  >
                    <stop
                      offset="0"
                      stop-color="#ccb300"
                      stop-opacity="1"
                    ></stop>
                    <stop
                      offset="0.409"
                      stop-color="#cc9700"
                      stop-opacity="1"
                    ></stop>
                    <stop
                      offset="0.775"
                      stop-color="#cc8400"
                      stop-opacity="1"
                    ></stop>
                    <stop
                      offset="1"
                      stop-color="#cc7d00"
                      stop-opacity="1"
                    ></stop>
                  </linearGradient>
                  <clipPath id="clipPath132" clipPathUnits="userSpaceOnUse">
                    <path d="M213.938 171.387c-3.461 0-6.485 1.129-8.84 3.254l-.004-.004a.286.286 0 01-.031.027l-.645.629c-.02.02-.039.043-.063.066l.743.743c2.355-2.125 5.375-3.254 8.836-3.25 3.382 0 7.187 1.078 11.203 3.355l145.152 82.473.93-.93-.942-.535-145.14-82.469c-3.66-2.074-7.141-3.156-10.285-3.336a18.869 18.869 0 00-.914-.023"></path>
                  </clipPath>
                  <linearGradient
                    id="linearGradient138"
                    x1="0"
                    x2="1"
                    y1="0"
                    y2="0"
                    gradientTransform="rotate(-135 231.512 66.39) scale(321.851)"
                    gradientUnits="userSpaceOnUse"
                    spreadMethod="pad"
                  >
                    <stop
                      offset="0"
                      stop-color="#cc2e36"
                      stop-opacity="1"
                    ></stop>
                    <stop
                      offset="1"
                      stop-color="#9c0e4e"
                      stop-opacity="1"
                    ></stop>
                  </linearGradient>
                  <clipPath id="clipPath150" clipPathUnits="userSpaceOnUse">
                    <path d="M204.355 175.359c-2.91 3.079-4.628 7.856-4.628 14.051v1.457c0-6.191 1.718-10.972 4.628-14.051l.743-.711-.743-.746"></path>
                  </clipPath>
                  <linearGradient
                    id="linearGradient164"
                    x1="0"
                    x2="1"
                    y1="0"
                    y2="0"
                    gradientTransform="scale(-237.34) rotate(45 1.43 -2.487)"
                    gradientUnits="userSpaceOnUse"
                    spreadMethod="pad"
                  >
                    <stop
                      offset="0"
                      stop-color="#008de0"
                      stop-opacity="1"
                    ></stop>
                    <stop
                      offset="0.007"
                      stop-color="#008de0"
                      stop-opacity="1"
                    ></stop>
                    <stop
                      offset="0.26"
                      stop-color="#00a7e0"
                      stop-opacity="1"
                    ></stop>
                    <stop
                      offset="0.512"
                      stop-color="#00b8e0"
                      stop-opacity="1"
                    ></stop>
                    <stop
                      offset="0.76"
                      stop-color="#00c4e0"
                      stop-opacity="1"
                    ></stop>
                    <stop
                      offset="1"
                      stop-color="#00c7e0"
                      stop-opacity="1"
                    ></stop>
                  </linearGradient>
                  <clipPath id="clipPath174" clipPathUnits="userSpaceOnUse">
                    <path d="M204.355 175.359l.743.746v-.003l-.743-.743"></path>
                  </clipPath>
                  <linearGradient
                    id="linearGradient180"
                    x1="0"
                    x2="1"
                    y1="0"
                    y2="0"
                    gradientTransform="rotate(-135 231.512 66.39) scale(321.851)"
                    gradientUnits="userSpaceOnUse"
                    spreadMethod="pad"
                  >
                    <stop
                      offset="0"
                      stop-color="#e0333c"
                      stop-opacity="1"
                    ></stop>
                    <stop
                      offset="1"
                      stop-color="#ab0f56"
                      stop-opacity="1"
                    ></stop>
                  </linearGradient>
                  <clipPath id="clipPath192" clipPathUnits="userSpaceOnUse">
                    <path d="M371.219 257.75l-.93.93 49.859 28.332c6.332 3.597 9.887 8.238 10.481 12.965 0-1.735-.387-3.469-1.156-5.157-1.551-3.402-4.66-6.617-9.325-9.269l-48.929-27.801"></path>
                  </clipPath>
                  <linearGradient
                    id="linearGradient202"
                    x1="0"
                    x2="1"
                    y1="0"
                    y2="0"
                    gradientTransform="rotate(180 219.172 149.993) scale(241.97)"
                    gradientUnits="userSpaceOnUse"
                    spreadMethod="pad"
                  >
                    <stop
                      offset="0"
                      stop-color="#e0c500"
                      stop-opacity="1"
                    ></stop>
                    <stop
                      offset="0.409"
                      stop-color="#e0a600"
                      stop-opacity="1"
                    ></stop>
                    <stop
                      offset="0.775"
                      stop-color="#e09100"
                      stop-opacity="1"
                    ></stop>
                    <stop
                      offset="1"
                      stop-color="#e08900"
                      stop-opacity="1"
                    ></stop>
                  </linearGradient>
                  <clipPath id="clipPath214" clipPathUnits="userSpaceOnUse">
                    <path d="M430.629 299.996c-.594 4.738-4.149 9.375-10.481 12.973l-49.863 28.328.93.93h.004l48.929-27.801c6.981-3.969 10.477-9.199 10.481-14.43"></path>
                  </clipPath>
                  <linearGradient
                    id="linearGradient224"
                    x1="0"
                    x2="1"
                    y1="0"
                    y2="0"
                    gradientTransform="rotate(180 219.172 149.993) scale(241.97)"
                    gradientUnits="userSpaceOnUse"
                    spreadMethod="pad"
                  >
                    <stop
                      offset="0"
                      stop-color="#ffe840"
                      stop-opacity="1"
                    ></stop>
                    <stop
                      offset="0.409"
                      stop-color="#ffce40"
                      stop-opacity="1"
                    ></stop>
                    <stop
                      offset="0.775"
                      stop-color="#ffbc40"
                      stop-opacity="1"
                    ></stop>
                    <stop
                      offset="1"
                      stop-color="#ffb540"
                      stop-opacity="1"
                    ></stop>
                  </linearGradient>
                  <clipPath id="clipPath236" clipPathUnits="userSpaceOnUse">
                    <path d="M199.727 409.105v1.528c0 .551.015 1.09.043 1.613v.024c0 .007 0 .015.003.023v.059c.301 5.332 1.957 9.492 4.582 12.269l.731-.734c-3.356-3.028-5.359-8.078-5.359-14.782m5.339 16.215l.028.028c-.008-.012-.02-.02-.028-.028"></path>
                  </clipPath>
                  <linearGradient
                    id="linearGradient250"
                    x1="0"
                    x2="1"
                    y1="0"
                    y2="0"
                    gradientTransform="scale(-237.34) rotate(45 1.43 -2.487)"
                    gradientUnits="userSpaceOnUse"
                    spreadMethod="pad"
                  >
                    <stop
                      offset="0"
                      stop-color="#40b8ff"
                      stop-opacity="1"
                    ></stop>
                    <stop
                      offset="0.007"
                      stop-color="#40b9ff"
                      stop-opacity="1"
                    ></stop>
                    <stop
                      offset="0.26"
                      stop-color="#40ceff"
                      stop-opacity="1"
                    ></stop>
                    <stop
                      offset="0.512"
                      stop-color="#40ddff"
                      stop-opacity="1"
                    ></stop>
                    <stop
                      offset="0.76"
                      stop-color="#40e7ff"
                      stop-opacity="1"
                    ></stop>
                    <stop
                      offset="1"
                      stop-color="#40eaff"
                      stop-opacity="1"
                    ></stop>
                  </linearGradient>
                  <clipPath id="clipPath262" clipPathUnits="userSpaceOnUse">
                    <path d="M370.285 341.297L225.137 423.77c-4.024 2.281-7.832 3.363-11.223 3.363-3.457 0-6.473-1.125-8.828-3.246l-.731.734c.231.242.465.477.711.699l.028.024c2.336 2.105 5.32 3.23 8.746 3.25h.074c3.391 0 7.199-1.082 11.223-3.364l146.082-83-.004-.003-.93-.93"></path>
                  </clipPath>
                  <linearGradient
                    id="linearGradient274"
                    x1="0"
                    x2="1"
                    y1="0"
                    y2="0"
                    gradientTransform="scale(143.72) rotate(-45 4.786 .28)"
                    gradientUnits="userSpaceOnUse"
                    spreadMethod="pad"
                  >
                    <stop
                      offset="0"
                      stop-color="#65b895"
                      stop-opacity="1"
                    ></stop>
                    <stop
                      offset="0.069"
                      stop-color="#62bd95"
                      stop-opacity="1"
                    ></stop>
                    <stop
                      offset="0.476"
                      stop-color="#50db97"
                      stop-opacity="1"
                    ></stop>
                    <stop
                      offset="0.801"
                      stop-color="#44ed98"
                      stop-opacity="1"
                    ></stop>
                    <stop
                      offset="1"
                      stop-color="#40f498"
                      stop-opacity="1"
                    ></stop>
                  </linearGradient>
                </defs>
                <g transform="matrix(1.33333 0 0 -1.33333 -13.333 66.667)">
                  <g transform="scale(.1)">
                    <path
                      fill="#000"
                      fill-opacity="1"
                      fill-rule="nonzero"
                      stroke="none"
                      d="M1400 100H150c-27.5 0-50 22.5-50 50v300c0 27.5 22.5 50 50 50h1250c27.5 0 50-22.5 50-50V150c0-27.5-22.5-50-50-50"
                    ></path>
                    <path
                      fill="#a6a6a6"
                      fill-opacity="1"
                      fill-rule="nonzero"
                      stroke="none"
                      d="M1400 500H150c-27.5 0-50-22.5-50-50V150c0-27.5 22.5-50 50-50h1250c27.5 0 50 22.5 50 50v300c0 27.5-22.5 50-50 50m0-8c23.16 0 42-18.844 42-42V150c0-23.16-18.84-42.004-42-42.004H150c-23.156 0-42 18.844-42 42.004v300c0 23.156 18.844 42 42 42h1250"
                    ></path>
                    <path
                      fill="#fff"
                      fill-opacity="1"
                      fill-rule="nonzero"
                      stroke="none"
                      d="M1169.36 200h18.66v125.012h-18.66zm168.07 79.98l-21.39-54.199h-.64l-22.2 54.199h-20.1l33.29-75.753-18.98-42.137h19.47l51.3 117.89zm-105.82-65.781c-6.12 0-14.64 3.055-14.64 10.617 0 9.649 10.62 13.348 19.78 13.348 8.21 0 12.06-1.769 17.05-4.184-1.45-11.578-11.42-19.781-22.19-19.781zm2.25 68.516c-13.51 0-27.5-5.953-33.29-19.141l16.56-6.914c3.54 6.914 10.13 9.168 17.05 9.168 9.65 0 19.46-5.793 19.62-16.086v-1.285c-3.38 1.93-10.61 4.824-19.46 4.824-17.85 0-36.03-9.808-36.03-28.144 0-16.727 14.64-27.504 31.04-27.504 12.55 0 19.46 5.629 23.81 12.222h.64v-9.648h18.01v47.93c0 22.191-16.56 34.578-37.95 34.578zm-115.32-17.953H1092v42.851h26.54c13.95 0 21.87-11.55 21.87-21.425 0-9.688-7.92-21.426-21.87-21.426zm-.48 60.25h-44.71V200H1092v47.363h26.06c20.68 0 41.01 14.973 41.01 38.825 0 23.851-20.33 38.824-41.01 38.824zM874.25 214.176c-12.891 0-23.684 10.793-23.684 25.617 0 14.98 10.793 25.937 23.684 25.937 12.727 0 22.715-10.957 22.715-25.937 0-14.824-9.988-25.617-22.715-25.617zm21.426 58.804h-.645c-4.187 4.993-12.246 9.504-22.394 9.504-21.266 0-40.758-18.687-40.758-42.691 0-23.844 19.492-42.371 40.758-42.371 10.148 0 18.207 4.512 22.394 9.664h.645v-6.121c0-16.274-8.699-24.973-22.715-24.973-11.438 0-18.527 8.219-21.43 15.145l-16.269-6.766c4.672-11.277 17.078-25.133 37.699-25.133 21.91 0 40.437 12.891 40.437 44.305v76.363h-17.722zM926.285 200h18.688v125.016h-18.688zm46.238 41.242c-.484 16.434 12.727 24.809 22.231 24.809 7.416 0 13.696-3.703 15.786-9.024zm57.997 14.176c-3.54 9.508-14.34 27.066-36.411 27.066-21.91 0-40.113-17.238-40.113-42.531 0-23.844 18.043-42.531 42.207-42.531 19.497 0 30.777 11.922 35.447 18.848l-14.5 9.668c-4.83-7.09-11.44-11.762-20.947-11.762-9.504 0-16.269 4.351-20.621 12.887l56.868 23.523zm-453.082 14.016v-18.043h43.175c-1.289-10.149-4.672-17.559-9.828-22.715-6.281-6.285-16.109-13.211-33.347-13.211-26.583 0-47.364 21.426-47.364 48.008 0 26.582 20.781 48.011 47.364 48.011 14.339 0 24.808-5.64 32.542-12.89l12.727 12.726c-10.793 10.313-25.133 18.207-45.269 18.207-36.411 0-67.02-29.644-67.02-66.054 0-36.41 30.609-66.051 67.02-66.051 19.656 0 34.476 6.441 46.074 18.527 11.922 11.922 15.629 28.676 15.629 42.207 0 4.192-.321 8.055-.969 11.278zm110.789-55.258c-12.891 0-24.008 10.633-24.008 25.777 0 15.305 11.117 25.777 24.008 25.777 12.886 0 24.003-10.472 24.003-25.777 0-15.144-11.117-25.777-24.003-25.777zm0 68.308c-23.524 0-42.696-17.882-42.696-42.531 0-24.488 19.172-42.531 42.696-42.531 23.519 0 42.691 18.043 42.691 42.531 0 24.649-19.172 42.531-42.691 42.531zm93.132-68.308c-12.886 0-24.004 10.633-24.004 25.777 0 15.305 11.118 25.777 24.004 25.777 12.887 0 24.004-10.472 24.004-25.777 0-15.144-11.117-25.777-24.004-25.777zm0 68.308c-23.523 0-42.691-17.882-42.691-42.531 0-24.488 19.168-42.531 42.691-42.531 23.52 0 42.692 18.043 42.692 42.531 0 24.649-19.172 42.531-42.692 42.531"
                    ></path>
                    <g>
                      <g clip-path="url(#clipPath28)">
                        <path
                          fill="url(#linearGradient42)"
                          fill-opacity="1"
                          fill-rule="nonzero"
                          stroke="none"
                          d="M205.098 176.105l-.743.711c-2.91 3.079-4.628 7.86-4.628 14.051v-1.457V410.566v-1.461c0 6.704 2.003 11.754 5.359 14.782l123.898-123.895-123.886-123.887M199.77 412.27c0 .007 0 .015.003.023-.003-.008-.003-.016-.003-.023m.003.07v0"
                        ></path>
                      </g>
                    </g>
                    <g>
                      <g clip-path="url(#clipPath52)">
                        <path
                          fill="url(#linearGradient62)"
                          fill-opacity="1"
                          fill-rule="nonzero"
                          stroke="none"
                          d="M370.277 257.215l.942.535 48.929 27.801c4.665 2.652 7.774 5.867 9.325 9.269-1.547-3.402-4.657-6.621-9.325-9.273l-48.929-27.801-.942-.531m.012 1.465l-41.305 41.312 41.301 41.305 49.863-28.328c6.332-3.598 9.887-8.235 10.481-12.973v-.019c-.594-4.727-4.149-9.368-10.481-12.965l-49.859-28.332"
                        ></path>
                      </g>
                    </g>
                    <g>
                      <g clip-path="url(#clipPath72)">
                        <path
                          fill="url(#linearGradient78)"
                          fill-opacity="1"
                          fill-rule="nonzero"
                          stroke="none"
                          d="M213.93 171.387c-3.461 0-6.481 1.125-8.836 3.25l.004.004c2.355-2.125 5.379-3.254 8.84-3.254a18.869 18.869 0 01-.008 0m.004 1.465c-3.461-.004-6.481 1.125-8.836 3.25v.003l123.886 123.887 41.305-41.312-145.152-82.473c-4.016-2.277-7.821-3.355-11.203-3.355m-8.871 1.812c-.219.199-.434.41-.645.629l.645-.629"
                        ></path>
                      </g>
                    </g>
                    <g>
                      <g clip-path="url(#clipPath88)">
                        <path
                          fill="url(#linearGradient100)"
                          fill-opacity="1"
                          fill-rule="nonzero"
                          stroke="none"
                          d="M328.984 299.992L205.086 423.887c2.355 2.121 5.371 3.246 8.828 3.246 3.391 0 7.199-1.082 11.223-3.363l145.148-82.473-41.301-41.305m42.235 42.238l-146.082 83c-4.024 2.282-7.832 3.364-11.223 3.364h-.043.059c3.383 0 7.187-1.078 11.207-3.36l146.082-83.004M213.84 428.594"
                        ></path>
                      </g>
                    </g>
                    <path
                      fill="#000"
                      fill-opacity="1"
                      fill-rule="nonzero"
                      stroke="none"
                      d="M214.852 171.41c3.144.18 6.625 1.262 10.285 3.336l145.14 82.469-145.14-82.469c-3.657-2.078-7.141-3.156-10.285-3.336m-9.758 3.227l-.031.027a.286.286 0 00.031-.027m-.676.656l-.063.062v.004c.024-.023.043-.046.063-.066"
                    ></path>
                    <g>
                      <g clip-path="url(#clipPath112)">
                        <path
                          fill="url(#linearGradient122)"
                          fill-opacity="1"
                          fill-rule="nonzero"
                          stroke="none"
                          d="M370.277 257.215l.942.535-.942-.535"
                        ></path>
                      </g>
                    </g>
                    <g>
                      <g clip-path="url(#clipPath132)">
                        <path
                          fill="url(#linearGradient138)"
                          fill-opacity="1"
                          fill-rule="nonzero"
                          stroke="none"
                          d="M213.938 171.387c-3.461 0-6.485 1.129-8.84 3.254l-.004-.004a.286.286 0 01-.031.027l-.645.629c-.02.02-.039.043-.063.066l.743.743c2.355-2.125 5.375-3.254 8.836-3.25 3.382 0 7.187 1.078 11.203 3.355l145.152 82.473.93-.93-.942-.535-145.14-82.469c-3.66-2.074-7.141-3.156-10.285-3.336a18.869 18.869 0 00-.914-.023"
                        ></path>
                      </g>
                    </g>
                    <path
                      fill="#000"
                      fill-opacity="1"
                      fill-rule="nonzero"
                      stroke="none"
                      d="M204.355 175.355c-2.91 3.079-4.628 7.86-4.628 14.051v.004c0-6.195 1.718-10.972 4.628-14.051v-.004"
                    ></path>
                    <g>
                      <g clip-path="url(#clipPath150)">
                        <path
                          fill="url(#linearGradient164)"
                          fill-opacity="1"
                          fill-rule="nonzero"
                          stroke="none"
                          d="M204.355 175.359c-2.91 3.079-4.628 7.856-4.628 14.051v1.457c0-6.191 1.718-10.972 4.628-14.051l.743-.711-.743-.746"
                        ></path>
                      </g>
                    </g>
                    <g>
                      <g clip-path="url(#clipPath174)">
                        <path
                          fill="url(#linearGradient180)"
                          fill-opacity="1"
                          fill-rule="nonzero"
                          stroke="none"
                          d="M204.355 175.359l.743.746v-.003l-.743-.743"
                        ></path>
                      </g>
                    </g>
                    <path
                      fill="#000"
                      fill-opacity="1"
                      fill-rule="nonzero"
                      stroke="none"
                      d="M429.473 294.82c.769 1.688 1.156 3.422 1.156 5.157v.007c0-1.738-.387-3.472-1.156-5.164"
                    ></path>
                    <g>
                      <g clip-path="url(#clipPath192)">
                        <path
                          fill="url(#linearGradient202)"
                          fill-opacity="1"
                          fill-rule="nonzero"
                          stroke="none"
                          d="M371.219 257.75l-.93.93 49.859 28.332c6.332 3.597 9.887 8.238 10.481 12.965 0-1.735-.387-3.469-1.156-5.157-1.551-3.402-4.66-6.617-9.325-9.269l-48.929-27.801"
                        ></path>
                      </g>
                    </g>
                    <path
                      fill="#404040"
                      fill-opacity="1"
                      fill-rule="nonzero"
                      stroke="none"
                      d="M430.629 299.992v.004c-.004 5.231-3.5 10.461-10.481 14.43l-48.929 27.801h-.004l.004.003 48.929-27.8c6.989-3.969 10.489-9.207 10.481-14.438"
                    ></path>
                    <g>
                      <g clip-path="url(#clipPath214)">
                        <path
                          fill="url(#linearGradient224)"
                          fill-opacity="1"
                          fill-rule="nonzero"
                          stroke="none"
                          d="M430.629 299.996c-.594 4.738-4.149 9.375-10.481 12.973l-49.863 28.328.93.93h.004l48.929-27.801c6.981-3.969 10.477-9.199 10.481-14.43"
                        ></path>
                      </g>
                    </g>
                    <path
                      fill="#404040"
                      fill-opacity="1"
                      fill-rule="nonzero"
                      stroke="none"
                      d="M199.727 410.621v0m.043 1.625v0m.003.047v0m0 .059c.579 10.273 6.165 16.207 14.067 16.242-3.426-.02-6.41-1.145-8.746-3.25v.004l-.028-.028c-.246-.222-.48-.457-.711-.699-2.625-2.777-4.281-6.937-4.582-12.269"
                    ></path>
                    <g>
                      <g clip-path="url(#clipPath236)">
                        <path
                          fill="url(#linearGradient250)"
                          fill-opacity="1"
                          fill-rule="nonzero"
                          stroke="none"
                          d="M199.727 409.105v1.528c0 .551.015 1.09.043 1.613v.024c0 .007 0 .015.003.023v.059c.301 5.332 1.957 9.492 4.582 12.269l.731-.734c-3.356-3.028-5.359-8.078-5.359-14.782m5.339 16.215l.028.028c-.008-.012-.02-.02-.028-.028"
                        ></path>
                      </g>
                    </g>
                    <path
                      fill="#404040"
                      fill-opacity="1"
                      fill-rule="nonzero"
                      stroke="none"
                      d="M213.84 428.594h.031-.031"
                    ></path>
                    <g>
                      <g clip-path="url(#clipPath262)">
                        <path
                          fill="url(#linearGradient274)"
                          fill-opacity="1"
                          fill-rule="nonzero"
                          stroke="none"
                          d="M370.285 341.297L225.137 423.77c-4.024 2.281-7.832 3.363-11.223 3.363-3.457 0-6.473-1.125-8.828-3.246l-.731.734c.231.242.465.477.711.699l.028.024c2.336 2.105 5.32 3.23 8.746 3.25h.074c3.391 0 7.199-1.082 11.223-3.364l146.082-83-.004-.003-.93-.93"
                        ></path>
                      </g>
                    </g>
                    <path
                      fill="#fff"
                      fill-opacity="1"
                      fill-rule="nonzero"
                      stroke="none"
                      d="M521.086 377.371h10.644c6.922 0 12.411 1.984 16.461 5.953 4.055 3.965 6.079 9.528 6.079 16.676 0 7.094-2.024 12.637-6.079 16.637-4.05 3.988-9.539 5.992-16.461 5.992h-10.644zM513.379 370v60h18.351c9.215 0 16.59-2.777 22.125-8.34 5.532-5.555 8.293-12.773 8.293-21.66 0-8.883-2.761-16.105-8.293-21.66-5.535-5.563-12.91-8.34-22.125-8.34h-18.351"
                    ></path>
                    <path
                      fill="#fff"
                      fill-opacity="1"
                      fill-rule="nonzero"
                      stroke="none"
                      d="M521.086 377.371v-1h10.644c7.106-.008 12.903 2.059 17.165 6.238 4.281 4.184 6.378 10.063 6.375 17.391.007 7.273-2.098 13.137-6.375 17.348-4.258 4.203-10.059 6.289-17.165 6.281h-11.644v-47.258h1v1h1v44.258h9.644c6.739-.012 11.915-1.93 15.762-5.707v.004c3.828-3.789 5.77-9.012 5.778-15.926-.008-6.969-1.954-12.211-5.778-15.961-3.844-3.758-9.023-5.656-15.762-5.668h-10.644v-1h1zM513.379 370h1v59h17.351c9.024-.008 16.079-2.691 21.418-8.047 5.329-5.367 7.993-12.269 8-20.953-.007-8.68-2.671-15.586-8-20.953-5.339-5.356-12.394-8.039-21.418-8.047h-18.351v-1h1-1v-1h18.351c9.411-.008 17.102 2.863 22.836 8.633 5.727 5.746 8.59 13.285 8.582 22.367.008 9.09-2.855 16.621-8.582 22.363-5.734 5.774-13.425 8.645-22.836 8.637h-19.351v-62h1v1"
                    ></path>
                    <path
                      fill="#fff"
                      fill-opacity="1"
                      fill-rule="nonzero"
                      stroke="none"
                      d="M572.969 370v60h7.707v-60h-7.707"
                    ></path>
                    <path
                      fill="#fff"
                      fill-opacity="1"
                      fill-rule="nonzero"
                      stroke="none"
                      d="M572.969 370h1v59h5.707v-58h-6.707v-1h1-1v-1h8.707v62h-9.707v-62h1v1"
                    ></path>
                    <path
                      fill="#fff"
                      fill-opacity="1"
                      fill-rule="nonzero"
                      stroke="none"
                      d="M611.34 368.66c-4.36 0-8.613 1.422-12.777 4.27-4.168 2.851-6.891 6.843-8.172 11.988l7.043 2.848c.836-3.297 2.546-6.078 5.144-8.336 2.61-2.262 5.52-3.395 8.762-3.395 3.348 0 6.219.879 8.594 2.637 2.371 1.758 3.55 4.148 3.55 7.168 0 3.348-1.179 5.933-3.55 7.75-2.375 1.816-6.133 3.504-11.274 5.07-5.308 1.672-9.336 3.84-12.066 6.496-2.739 2.653-4.114 6.043-4.114 10.18 0 4.305 1.708 8.043 5.118 11.227 3.41 3.183 7.851 4.781 13.32 4.781 5.09 0 9.219-1.278 12.402-3.817 3.184-2.543 5.254-5.32 6.2-8.339l-7.032-2.926c-.508 1.89-1.746 3.656-3.726 5.277-1.985 1.613-4.543 2.426-7.676 2.426-2.961 0-5.488-.82-7.578-2.473-2.102-1.648-3.149-3.699-3.149-6.156 0-2.234.969-4.121 2.895-5.656 1.934-1.535 4.766-2.922 8.504-4.149 2.961-.953 5.43-1.871 7.422-2.765 1.98-.891 3.996-2.082 6.023-3.563 2.043-1.476 3.574-3.324 4.61-5.531 1.039-2.207 1.554-4.762 1.554-7.664 0-2.906-.597-5.504-1.797-7.793-1.203-2.297-2.8-4.11-4.785-5.449a23.627 23.627 0 00-6.406-3.059 24.015 24.015 0 00-7.039-1.047"
                    ></path>
                    <path
                      fill="#fff"
                      fill-opacity="1"
                      fill-rule="nonzero"
                      stroke="none"
                      d="M611.34 368.66v1c-4.137.004-8.18 1.34-12.211 4.094-3.973 2.726-6.531 6.469-7.77 11.402l-.968-.238.375-.93 7.039 2.848-.371.93-.969-.25c.883-3.481 2.715-6.461 5.457-8.84v-.004c2.758-2.395 5.937-3.645 9.418-3.637 3.519-.004 6.633.938 9.187 2.832 2.61 1.91 3.981 4.696 3.957 7.973.02 3.578-1.316 6.551-3.945 8.543-2.539 1.937-6.387 3.644-11.586 5.234h.008c-5.215 1.637-9.098 3.75-11.672 6.258-2.539 2.473-3.797 5.547-3.809 9.461.012 4.031 1.563 7.453 4.801 10.496 3.211 2.992 7.356 4.504 12.637 4.512 4.926-.004 8.801-1.227 11.777-3.598 3.075-2.457 5-5.074 5.871-7.855l.954.297-.383.925-7.032-2.929.383-.922.969.258c-.574 2.144-1.969 4.082-4.062 5.793h-.004c-2.184 1.785-5.004 2.656-8.305 2.652-3.145.004-5.93-.887-8.199-2.688v.004c-2.297-1.785-3.543-4.195-3.528-6.945-.011-2.531 1.157-4.77 3.27-6.438l.004-.003c2.074-1.645 5.004-3.063 8.812-4.313h.004v-.004c2.938-.941 5.375-1.851 7.321-2.726 1.91-.856 3.863-2.012 5.847-3.457 1.914-1.387 3.324-3.09 4.293-5.149.961-2.051 1.457-4.453 1.457-7.238 0-2.774-.562-5.195-1.683-7.332-1.133-2.16-2.618-3.836-4.461-5.082h.004a22.655 22.655 0 00-6.137-2.93 22.966 22.966 0 00-6.75-1.004v-2c2.496 0 4.941.363 7.332 1.09a24.797 24.797 0 016.672 3.184l.004.004c2.121 1.433 3.84 3.382 5.109 5.812 1.281 2.445 1.91 5.215 1.91 8.258 0 3.019-.539 5.726-1.648 8.09-1.102 2.355-2.758 4.347-4.926 5.918v-.004c-2.078 1.515-4.148 2.742-6.203 3.664-2.039.922-4.543 1.847-7.527 2.808h.007c-3.672 1.2-6.406 2.555-8.199 3.977l-.004.004.008-.004c-1.734 1.406-2.5 2.937-2.516 4.875.02 2.164.864 3.855 2.766 5.371v.004c1.91 1.5 4.184 2.25 6.961 2.254 2.965-.004 5.262-.754 7.043-2.203l.012-.008-.012.012c1.867-1.532 2.953-3.121 3.394-4.766l.297-1.102 8.086 3.368.844.351-.273.871c-1.024 3.254-3.239 6.192-6.532 8.825-3.39 2.707-7.777 4.035-13.027 4.031-5.656.008-10.398-1.676-14.004-5.051-3.574-3.324-5.445-7.383-5.434-11.957-.011-4.356 1.485-8.07 4.415-10.898 2.894-2.805 7.058-5.028 12.468-6.731h.008c5.074-1.547 8.746-3.219 10.953-4.91 2.117-1.645 3.145-3.836 3.16-6.957-.015-2.758-1.011-4.758-3.148-6.363-2.191-1.622-4.82-2.438-7.996-2.442-3.008.008-5.645 1.024-8.106 3.149-2.453 2.14-4.039 4.714-4.832 7.828l-.285 1.109-8.101-3.277-.805-.324.211-.844c1.32-5.348 4.211-9.594 8.578-12.571 4.289-2.941 8.762-4.445 13.34-4.445v1"
                    ></path>
                    <path
                      fill="#fff"
                      fill-opacity="1"
                      fill-rule="nonzero"
                      stroke="none"
                      d="M650.137 401.68h12.91c3.242 0 5.84 1.086 7.793 3.261 1.953 2.184 2.93 4.579 2.93 7.207 0 2.625-.977 5.032-2.93 7.207-1.953 2.184-4.551 3.274-7.793 3.274h-12.91zm0-31.68h-7.703v60h20.449c5.078 0 9.48-1.687 13.191-5.066 3.723-3.379 5.574-7.645 5.574-12.786 0-5.136-1.851-9.394-5.574-12.773-3.711-3.383-8.113-5.074-13.191-5.074h-12.746V370"
                    ></path>
                    <path
                      fill="#fff"
                      fill-opacity="1"
                      fill-rule="nonzero"
                      stroke="none"
                      d="M650.137 401.68v-1h12.91c3.461-.012 6.402 1.199 8.539 3.593 2.086 2.325 3.191 4.997 3.184 7.875.007 2.879-1.094 5.555-3.184 7.875-2.133 2.403-5.078 3.618-8.539 3.606h-13.91V400.68h1v1h1v19.949h11.91c3.023-.016 5.273-.977 7.047-2.941l.015-.016-.015.016c1.816-2.036 2.668-4.165 2.676-6.54-.008-2.375-.856-4.496-2.676-6.539-1.77-1.961-4.024-2.918-7.047-2.929h-12.91v-1h1zm0-31.68v1h-6.703v58h19.449c4.855-.008 8.972-1.59 12.519-4.809 3.524-3.214 5.235-7.14 5.246-12.043-.011-4.894-1.722-8.816-5.246-12.035h-.004c-3.543-3.222-7.66-4.804-12.515-4.812h-13.746V370h1v1-1h1v23.301h11.746c5.297-.008 9.988 1.793 13.863 5.336 3.918 3.539 5.918 8.133 5.902 13.511.016 5.383-1.984 9.981-5.902 13.524-3.875 3.539-8.566 5.336-13.863 5.328h-21.449v-62h9.703v1h-1"
                    ></path>
                    <path
                      fill="#fff"
                      fill-opacity="1"
                      fill-rule="nonzero"
                      stroke="none"
                      d="M702.129 382.777c4.441-4.496 9.875-6.742 16.301-6.742 6.425 0 11.863 2.246 16.297 6.742 4.445 4.496 6.668 10.243 6.668 17.223 0 6.98-2.223 12.727-6.668 17.223-4.434 4.496-9.872 6.742-16.297 6.742-6.426 0-11.86-2.246-16.301-6.742-4.434-4.496-6.66-10.243-6.66-17.223 0-6.98 2.226-12.727 6.66-17.223zm38.301-5.023c-5.899-6.066-13.235-9.094-22-9.094-8.774 0-16.106 3.028-21.992 9.094-5.903 6.059-8.84 13.476-8.84 22.246 0 8.77 2.937 16.188 8.84 22.246 5.886 6.067 13.218 9.098 21.992 9.098 8.718 0 16.035-3.047 21.961-9.137 5.918-6.09 8.879-13.492 8.879-22.207 0-8.77-2.954-16.187-8.84-22.246"
                    ></path>
                    <path
                      fill="#fff"
                      fill-opacity="1"
                      fill-rule="nonzero"
                      stroke="none"
                      d="M702.129 382.777l-.711-.703c4.605-4.676 10.352-7.051 17.012-7.039 6.656-.012 12.41 2.363 17.008 7.039 4.636 4.68 6.968 10.735 6.957 17.926.011 7.191-2.321 13.246-6.957 17.926-4.598 4.676-10.352 7.051-17.008 7.039-6.66.012-12.407-2.363-17.012-7.039l-.031-.031.031.031c-4.625-4.68-6.957-10.735-6.949-17.926-.008-7.191 2.324-13.246 6.949-17.926l.711.703.711.703c-4.242 4.317-6.363 9.747-6.371 16.52.008 6.773 2.129 12.203 6.371 16.52 4.281 4.316 9.394 6.433 15.59 6.445 6.191-.012 11.316-2.129 15.586-6.445 4.25-4.317 6.371-9.747 6.379-16.52-.008-6.773-2.129-12.203-6.379-16.52-4.27-4.316-9.395-6.433-15.586-6.445-6.196.012-11.309 2.129-15.59 6.445zm38.301-5.023l-.715.695c-5.735-5.875-12.746-8.777-21.285-8.789-8.543.012-15.555 2.914-21.278 8.789l-.027.031.027-.031c-5.722 5.895-8.547 13.004-8.554 21.551.007 8.547 2.832 15.656 8.554 21.551 5.723 5.875 12.735 8.781 21.278 8.793 8.484-.012 15.48-2.93 21.246-8.836 5.742-5.922 8.582-13.02 8.594-21.508-.012-8.547-2.844-15.656-8.555-21.551l.715-.695.718-.695c6.063 6.226 9.129 13.949 9.122 22.941.007 8.941-3.071 16.648-9.161 22.902-6.093 6.278-13.726 9.453-22.679 9.442-9 .011-16.657-3.149-22.711-9.403v.004c-6.074-6.23-9.129-13.953-9.121-22.945-.008-8.992 3.047-16.715 9.121-22.945v.004c6.054-6.254 13.711-9.407 22.711-9.399 8.996-.008 16.652 3.145 22.715 9.399l-.715.695"
                    ></path>
                    <path
                      fill="#fff"
                      fill-opacity="1"
                      fill-rule="nonzero"
                      stroke="none"
                      d="M760.09 370v60h9.383l29.16-46.676h.332l-.332 11.563V430h7.715v-60h-8.047l-30.508 48.938h-.332l.332-11.567V370h-7.703"
                    ></path>
                    <path
                      fill="#fff"
                      fill-opacity="1"
                      fill-rule="nonzero"
                      stroke="none"
                      d="M760.09 370h1v59h7.828l29.16-46.676h1.914l-.359 12.578V429h5.715v-58h-6.493l-30.507 48.938h-1.914l.359-12.579V371h-6.703v-1h1-1v-1h8.703v38.387l-.332 11.578-1-.027v-1h.332v1l-.848-.532L797.746 369h9.602v62h-9.715v-36.125l.332-11.578 1 .027v1h-.332v-1l.847.531L770.027 431H759.09v-62h1v1"
                    ></path>
                    <path
                      fill="#fff"
                      fill-opacity="1"
                      fill-rule="nonzero"
                      stroke="none"
                      d="M827.297 434.691h-6.711l4.363 10.731h8.379zM820.09 370v60h7.703v-60h-7.703"
                    ></path>
                    <path
                      fill="#fff"
                      fill-opacity="1"
                      fill-rule="nonzero"
                      stroke="none"
                      d="M827.297 434.691v1h-5.227l3.555 8.731h5.996l-5.199-9.238.875-.493v1-1l.867-.488 6.875 12.219h-10.762l-5.179-12.731h8.781l.285.512zM820.09 370h1v59h5.703v-58h-6.703v-1h1-1v-1h8.703v62h-9.703v-62h1v1"
                    ></path>
                    <path
                      fill="#fff"
                      fill-opacity="1"
                      fill-rule="nonzero"
                      stroke="none"
                      d="M856.367 370l-21.113 60h8.547l16.426-48.687h.332L877.656 430h8.543l-21.785-60h-8.047"
                    ></path>
                    <path
                      fill="#fff"
                      fill-opacity="1"
                      fill-rule="nonzero"
                      stroke="none"
                      d="M856.367 370l.942.332L836.668 429h6.414l16.426-48.687h1.758L878.363 429h6.41l-21.058-58h-7.348v-1l.942.332-.942-.332v-1h8.746l22.516 62H876.945l-17.332-49.355.946-.332v1h-.332v-1l.945.32L844.516 431h-10.672l21.816-62h.707v1"
                    ></path>
                    <path
                      fill="#fff"
                      fill-opacity="1"
                      fill-rule="nonzero"
                      stroke="none"
                      d="M929.949 422.629h-27.32v-19.024h24.637v-7.21h-24.637v-19.024h27.32V370h-35.027v60h35.027v-7.371"
                    ></path>
                    <path
                      fill="#fff"
                      fill-opacity="1"
                      fill-rule="nonzero"
                      stroke="none"
                      d="M929.949 422.629v1h-28.32v-21.024h24.637v-5.207l-24.637-.003v-21.024h27.32V371h-33.027v58h33.027v-6.371h1v1-1h1V431h-37.027v-62h37.027v9.371h-27.32v17.024h24.637v9.21h-24.637v17.024h27.32v1h-1"
                    ></path>
                    <path
                      fill="#fff"
                      fill-opacity="1"
                      fill-rule="nonzero"
                      stroke="none"
                      d="M942.02 370v60h7.707v-52.629h25.976V370H942.02"
                    ></path>
                    <path
                      fill="#fff"
                      fill-opacity="1"
                      fill-rule="nonzero"
                      stroke="none"
                      d="M942.02 370h1v59h5.707v-52.629h25.976V371H942.02v-1h1-1v-1h34.683v9.371h-25.976V431h-9.707v-62h1v1"
                    ></path>
                    <path
                      fill="#fff"
                      fill-opacity="1"
                      fill-rule="nonzero"
                      stroke="none"
                      d="M1005.54 370v60h9.38l29.16-46.676h.33l-.33 11.563V430h7.72v-60h-8.05l-30.51 48.938h-.33l.33-11.567V370h-7.7"
                    ></path>
                    <path
                      fill="#fff"
                      fill-opacity="1"
                      fill-rule="nonzero"
                      stroke="none"
                      d="M1005.54 370h1v59h7.83l29.16-46.676H1045.44l-.36 12.578V429h5.72v-58h-6.5l-30.5 48.938h-1.92l.36-12.579V371h-6.7v-1h1-1v-1h8.7v38.387l-.33 11.578-1-.027v-1h.33v1l-.85-.532 30.8-49.406h9.61v62h-9.72v-36.125l.33-11.578 1 .027v1h-.33v-1l.85.531L1015.48 431h-10.94v-62h1v1"
                    ></path>
                    <path
                      fill="#fff"
                      fill-opacity="1"
                      fill-rule="nonzero"
                      stroke="none"
                      d="M1076.29 382.777c4.44-4.496 9.87-6.742 16.3-6.742 6.42 0 11.86 2.246 16.3 6.742 4.44 4.496 6.67 10.243 6.67 17.223 0 6.98-2.23 12.727-6.67 17.223-4.44 4.496-9.88 6.742-16.3 6.742-6.43 0-11.86-2.246-16.3-6.742-4.43-4.496-6.66-10.243-6.66-17.223 0-6.98 2.23-12.727 6.66-17.223zm38.3-5.023c-5.9-6.066-13.23-9.094-22-9.094s-16.11 3.028-21.99 9.094c-5.9 6.059-8.84 13.476-8.84 22.246 0 8.77 2.94 16.188 8.84 22.246 5.88 6.067 13.22 9.098 21.99 9.098 8.72 0 16.03-3.047 21.96-9.137 5.92-6.09 8.88-13.492 8.88-22.207 0-8.77-2.95-16.187-8.84-22.246"
                    ></path>
                    <path
                      fill="#fff"
                      fill-opacity="1"
                      fill-rule="nonzero"
                      stroke="none"
                      d="M1076.29 382.777l-.71-.703c4.6-4.676 10.35-7.051 17.01-7.039 6.66-.012 12.41 2.363 17.01 7.039 4.63 4.68 6.97 10.735 6.96 17.926.01 7.191-2.33 13.246-6.96 17.926-4.6 4.676-10.35 7.051-17.01 7.039-6.66.012-12.41-2.363-17.01-7.039-4.63-4.68-6.96-10.735-6.95-17.926-.01-7.191 2.32-13.246 6.95-17.926l.71.703.71.703c-4.24 4.317-6.36 9.747-6.37 16.52.01 6.773 2.13 12.203 6.37 16.52 4.28 4.316 9.4 6.433 15.59 6.445 6.19-.012 11.32-2.129 15.58-6.445h.01c4.25-4.317 6.37-9.747 6.38-16.52-.01-6.773-2.13-12.203-6.38-16.52-4.27-4.316-9.4-6.433-15.59-6.445-6.19.012-11.31 2.129-15.59 6.445zm38.3-5.023l-.72.695c-5.73-5.875-12.74-8.777-21.28-8.789-8.54.012-15.56 2.914-21.28 8.789-5.72 5.895-8.54 13.004-8.55 21.551.01 8.547 2.83 15.656 8.55 21.551 5.72 5.875 12.74 8.781 21.28 8.793 8.49-.012 15.48-2.93 21.24-8.836 5.75-5.922 8.59-13.02 8.6-21.508-.01-8.547-2.84-15.656-8.56-21.551l.72-.695.72-.695c6.06 6.226 9.13 13.949 9.12 22.941.01 8.941-3.07 16.648-9.16 22.902-6.09 6.278-13.73 9.453-22.68 9.442-9 .011-16.66-3.149-22.71-9.403v.004c-6.08-6.23-9.13-13.953-9.12-22.945-.01-8.992 3.04-16.715 9.12-22.945v.004c6.05-6.254 13.71-9.407 22.71-9.399 9-.008 16.65 3.145 22.72 9.399l-.72.695"
                    ></path>
                  </g>
                </g>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                viewBox="0 0 119.664 40"
              >
                <g>
                  <g>
                    <g>
                      <path
                        fill="#a6a6a6"
                        d="M110.135 0H9.535c-.367 0-.73 0-1.095.002-.306.002-.61.008-.919.013A13.215 13.215 0 005.517.19a6.665 6.665 0 00-1.9.627 6.438 6.438 0 00-1.62 1.18A6.258 6.258 0 00.82 3.617a6.601 6.601 0 00-.625 1.903 12.993 12.993 0 00-.179 2.002c-.01.307-.01.615-.015.921V31.56c.005.31.006.61.015.921a12.992 12.992 0 00.18 2.002 6.588 6.588 0 00.624 1.905A6.208 6.208 0 001.998 38a6.274 6.274 0 001.618 1.179 6.7 6.7 0 001.901.63 13.455 13.455 0 002.004.177c.31.007.613.011.919.011.366.002.728.002 1.095.002h100.6c.36 0 .724 0 1.084-.002.304 0 .617-.004.922-.01a13.279 13.279 0 002-.178 6.804 6.804 0 001.908-.63A6.277 6.277 0 00117.666 38a6.395 6.395 0 001.182-1.614 6.604 6.604 0 00.619-1.905 13.506 13.506 0 00.185-2.002c.004-.31.004-.61.004-.921.008-.364.008-.725.008-1.094V9.536c0-.366 0-.73-.008-1.092 0-.306 0-.614-.004-.92a13.507 13.507 0 00-.185-2.003 6.618 6.618 0 00-.62-1.903 6.466 6.466 0 00-2.798-2.8 6.768 6.768 0 00-1.908-.627 13.044 13.044 0 00-2-.176c-.305-.005-.618-.011-.922-.013-.36-.002-.725-.002-1.084-.002z"
                      ></path>
                      <path d="M8.445 39.125c-.305 0-.602-.004-.904-.01a12.687 12.687 0 01-1.87-.164 5.884 5.884 0 01-1.656-.548 5.406 5.406 0 01-1.397-1.016 5.32 5.32 0 01-1.02-1.397 5.722 5.722 0 01-.544-1.657 12.414 12.414 0 01-.166-1.875c-.007-.21-.015-.913-.015-.913v-23.1s.009-.692.015-.895a12.37 12.37 0 01.165-1.872 5.755 5.755 0 01.544-1.662 5.373 5.373 0 011.015-1.398 5.565 5.565 0 011.402-1.023 5.823 5.823 0 011.653-.544A12.586 12.586 0 017.543.887l.902-.012h102.769l.913.013a12.385 12.385 0 011.858.162 5.938 5.938 0 011.671.548 5.594 5.594 0 012.415 2.42 5.763 5.763 0 01.535 1.649 12.995 12.995 0 01.174 1.887c.003.283.003.588.003.89.008.375.008.732.008 1.092v20.929c0 .363 0 .718-.008 1.075 0 .325 0 .623-.004.93a12.731 12.731 0 01-.17 1.853 5.739 5.739 0 01-.54 1.67 5.48 5.48 0 01-1.016 1.386 5.413 5.413 0 01-1.4 1.022 5.862 5.862 0 01-1.668.55 12.542 12.542 0 01-1.869.163c-.293.007-.6.011-.897.011l-1.084.002z"></path>
                    </g>
                    <g data-name="<Group>">
                      <g data-name="<Group>">
                        <g fill="#fff" data-name="<Group>">
                          <path
                            d="M24.769 20.3a4.949 4.949 0 012.356-4.151 5.066 5.066 0 00-3.99-2.158c-1.68-.176-3.308 1.005-4.164 1.005-.872 0-2.19-.988-3.608-.958a5.315 5.315 0 00-4.473 2.728c-1.934 3.348-.491 8.269 1.361 10.976.927 1.325 2.01 2.805 3.428 2.753 1.387-.058 1.905-.885 3.58-.885 1.658 0 2.144.885 3.59.852 1.489-.025 2.426-1.332 3.32-2.67a10.962 10.962 0 001.52-3.092 4.782 4.782 0 01-2.92-4.4z"
                            data-name="<Path>"
                          ></path>
                          <path
                            d="M22.037 12.21a4.872 4.872 0 001.115-3.49 4.957 4.957 0 00-3.208 1.66A4.636 4.636 0 0018.8 13.74a4.1 4.1 0 003.237-1.53z"
                            data-name="<Path>"
                          ></path>
                        </g>
                      </g>
                      <g fill="#fff">
                        <path d="M42.302 27.14H37.57l-1.137 3.356h-2.005l4.484-12.418h2.083l4.483 12.418h-2.039zm-4.243-1.55h3.752l-1.85-5.446h-.051z"></path>
                        <path d="M55.16 25.97c0 2.813-1.506 4.62-3.779 4.62a3.07 3.07 0 01-2.848-1.583h-.043v4.484H46.63V21.442h1.8v1.506h.033a3.212 3.212 0 012.883-1.6c2.298 0 3.813 1.816 3.813 4.622zm-1.91 0c0-1.833-.948-3.038-2.393-3.038-1.42 0-2.375 1.23-2.375 3.038 0 1.824.955 3.046 2.375 3.046 1.445 0 2.393-1.197 2.393-3.046z"></path>
                        <path d="M65.125 25.97c0 2.813-1.506 4.62-3.779 4.62a3.07 3.07 0 01-2.848-1.583h-.043v4.484h-1.859V21.442h1.799v1.506h.034a3.212 3.212 0 012.883-1.6c2.298 0 3.813 1.816 3.813 4.622zm-1.91 0c0-1.833-.948-3.038-2.393-3.038-1.42 0-2.375 1.23-2.375 3.038 0 1.824.955 3.046 2.375 3.046 1.445 0 2.392-1.197 2.392-3.046z"></path>
                        <path d="M71.71 27.036c.138 1.232 1.334 2.04 2.97 2.04 1.566 0 2.693-.808 2.693-1.919 0-.964-.68-1.54-2.29-1.936l-1.609-.388c-2.28-.55-3.339-1.617-3.339-3.348 0-2.142 1.867-3.614 4.519-3.614 2.624 0 4.423 1.472 4.483 3.614h-1.876c-.112-1.239-1.136-1.987-2.634-1.987-1.497 0-2.521.757-2.521 1.858 0 .878.654 1.395 2.255 1.79l1.368.336c2.548.603 3.606 1.626 3.606 3.443 0 2.323-1.85 3.778-4.793 3.778-2.754 0-4.614-1.42-4.734-3.667z"></path>
                        <path d="M83.346 19.3v2.142h1.722v1.472h-1.722v4.991c0 .776.345 1.137 1.102 1.137a5.808 5.808 0 00.611-.043v1.463a5.104 5.104 0 01-1.032.086c-1.833 0-2.548-.689-2.548-2.445v-5.189h-1.316v-1.472h1.316V19.3z"></path>
                        <path d="M86.065 25.97c0-2.849 1.678-4.639 4.294-4.639 2.625 0 4.295 1.79 4.295 4.639 0 2.856-1.661 4.638-4.295 4.638-2.633 0-4.294-1.782-4.294-4.638zm6.695 0c0-1.954-.895-3.108-2.401-3.108-1.506 0-2.4 1.162-2.4 3.108 0 1.962.894 3.106 2.4 3.106 1.506 0 2.401-1.144 2.401-3.106z"></path>
                        <path d="M96.186 21.442h1.773v1.541h.043a2.16 2.16 0 012.177-1.635 2.866 2.866 0 01.637.069v1.738a2.598 2.598 0 00-.835-.112 1.873 1.873 0 00-1.937 2.083v5.37h-1.858z"></path>
                        <path d="M109.384 27.837c-.25 1.643-1.85 2.771-3.898 2.771-2.634 0-4.269-1.764-4.269-4.595 0-2.84 1.644-4.682 4.19-4.682 2.506 0 4.08 1.72 4.08 4.466v.637h-6.394v.112a2.358 2.358 0 002.436 2.564 2.048 2.048 0 002.09-1.273zm-6.282-2.702h4.526a2.177 2.177 0 00-2.22-2.298 2.292 2.292 0 00-2.306 2.298z"></path>
                      </g>
                    </g>
                  </g>
                  <g data-name="<Group>">
                    <g fill="#fff">
                      <path d="M35.67 14.698V8.73h2.4c1.12 0 1.794.57 1.794 1.488a1.308 1.308 0 01-1.046 1.283v.07a1.41 1.41 0 011.344 1.434c0 1.05-.765 1.692-2.039 1.692zm.928-3.44h1.1c.819 0 1.244-.302 1.244-.869 0-.55-.401-.872-1.087-.872h-1.257zm1.34 2.654c.835 0 1.277-.34 1.277-.972 0-.624-.46-.95-1.331-.95h-1.286v1.922z"></path>
                      <path d="M41.114 13.424c0-.81.604-1.278 1.675-1.344l1.22-.07v-.389c0-.475-.315-.744-.922-.744-.496 0-.84.182-.939.5h-.86c.09-.773.818-1.27 1.84-1.27 1.129 0 1.766.563 1.766 1.514v3.077h-.856v-.633h-.07a1.515 1.515 0 01-1.353.707 1.36 1.36 0 01-1.5-1.348zm2.895-.384v-.377l-1.1.07c-.62.042-.901.253-.901.65 0 .405.351.64.835.64a1.062 1.062 0 001.166-.983z"></path>
                      <path d="M46.169 8.863a.576.576 0 11.575.542.547.547 0 01-.575-.542zm.132 1.332h.886v4.503H46.3z"></path>
                      <path d="M50.236 13.102l-.984 1.596h-.976l1.494-2.241-1.506-2.262h1.038l.968 1.588h.07l.959-1.588h.988l-1.484 2.224 1.5 2.279h-1.02l-.98-1.596z"></path>
                      <path d="M53.088 13.424c0-.81.603-1.278 1.675-1.344l1.22-.07v-.389c0-.475-.315-.744-.922-.744-.497 0-.84.182-.939.5h-.86c.09-.773.818-1.27 1.84-1.27 1.128 0 1.765.563 1.765 1.514v3.077h-.855v-.633h-.07a1.515 1.515 0 01-1.353.707 1.36 1.36 0 01-1.501-1.348zm2.894-.384v-.377l-1.1.07c-.62.042-.9.253-.9.65 0 .405.351.64.834.64a1.062 1.062 0 001.166-.983z"></path>
                      <path d="M58.259 10.195h.855v.69h.067a1.22 1.22 0 011.216-.765 1.868 1.868 0 01.396.037v.877a2.434 2.434 0 00-.496-.053 1.055 1.055 0 00-1.15 1.058v2.659h-.888z"></path>
                      <path d="M64.218 10.195h.856v.715h.066a1.348 1.348 0 011.344-.802 1.465 1.465 0 011.559 1.675v2.915h-.89v-2.692c0-.724-.314-1.084-.97-1.084a1.033 1.033 0 00-1.076 1.141v2.635h-.89z"></path>
                      <path d="M69.16 13.424c0-.81.604-1.278 1.675-1.344l1.22-.07v-.389c0-.475-.314-.744-.922-.744-.496 0-.84.182-.938.5h-.86c.09-.773.818-1.27 1.84-1.27 1.128 0 1.765.563 1.765 1.514v3.077h-.856v-.633h-.07a1.515 1.515 0 01-1.352.707 1.36 1.36 0 01-1.501-1.348zm2.895-.384v-.377l-1.1.07c-.62.042-.9.253-.9.65 0 .405.35.64.834.64a1.062 1.062 0 001.166-.983z"></path>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

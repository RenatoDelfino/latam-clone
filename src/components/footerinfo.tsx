import React from "react";

const FooterInfo = ({ className }: { className?: string }) => {
  return (
    <div className={`footerinfo-app mt-[80px] ${className}`}>
      <div className="footerchildren app_md:!flex-col app_sm:!flex-col">
        <div className="item-1">
          <img
            src="https://viagem-ferias-julho.com/themes/web/images/DescriptivePositive.svg"
            alt="LATAM Logo"
          />
        </div>
        <div className="item-2">
          <span>
            © 2024 LATAM Airlines Brasil Rua Ática nº 673, 6º andar sala 62, CEP
            04634-042 São Paulo/SP CNPJ: 02.012.862/0001-60
          </span>
        </div>
        <div className="item-3 app_sm:!hidden">
          <span className="mr-3">Certificado por:</span>

          <img
            src="https://viagem-ferias-julho.com/themes/web/images/PCIDSSCompliantGreyscale.svg"
            alt="PCI"
          />
        </div>
        <div className="item-4 !ml-5 app_sm:!ml-0 app_sm:!mt-3">
          <span className="app_sm:!hidden">Associado:</span>
          <ul className="space-x-3 !ml-5 app_sm:!ml-0">
            <li>
              <a
                href="https://example.com"
                rel="noopener noreferrer"
                target="_blank"
                title="Abear"
              >
                <span>
                  <img
                    src="https://viagem-ferias-julho.com/themes/web/images/ABEAR.svg"
                    alt="Abear"
                  />
                </span>
              </a>
            </li>
            <li>
              <span role="img" aria-label="Empresa Amiga da Justicia">
                <img
                  src="https://viagem-ferias-julho.com/themes/web/images/EmpresaAmigaDaJustica.svg"
                  alt="Empresa Amiga da Justicia"
                />
              </span>
            </li>
            <li>
              <span role="img" aria-label="Senacon">
                <img
                  src="https://viagem-ferias-julho.com/themes/web/images/Senacon.svg"
                  alt="Senacon"
                />
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FooterInfo;

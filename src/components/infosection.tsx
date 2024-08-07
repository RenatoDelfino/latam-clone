import React from "react";

const InfoSection: React.FC = () => {
  return (
    <section className="infosection-app container mt-[80px] opacity-85 mx-auto">
      <p>
        Compras realizadas no site da LATAM Airlines Brasil não estão sujeitas
        ao "Adicional de Emissão". Este valor é cobrado nas compras, alterações
        e reemissões de bilhetes efetuadas em nossa Central de Vendas e
        Serviços, lojas LATAM Airlines Brasil, não sendo reembolsável.
      </p>
      <p>O valor depende da rota:</p>
      <ul>
        <li>
          Para viagens Domésticas: <span>R$ 97</span> (97 reais brasileiros).
        </li>
        <li>
          Para viagens Regionais: <span>R$ 162</span> (162 reais brasileiros).
        </li>
        <li>
          Para viagens Longa Distância: <span>R$ 216</span> (216 reais
          brasileiros).
        </li>
        <li>
          Para viagens emitidas com pontos dentro e fora do Brasil:{" "}
          <span>R$ 60,00</span> (60,00 reais brasileiros).
        </li>
      </ul>
      <p>
        Central de Vendas e Serviços - nosso canal de informações e reserva de
        voos.
      </p>
      <p>
        <span>4002-5700</span> (capitais) e <span>0300 570 5700</span> (todo o
        Brasil). Qualquer dúvida sobre a disponibilidade do serviço 0300 ou 4002
        em sua região, entre em contato com a sua operadora de telefonia. Fale
        com a Gente (SAC) para elogios, sugestões e reclamações -
        <span>0800 0123 200</span>. Atendimento a Portadores de Deficiências
        Auditivas - <span>0800 055 5500</span>. Em atendimento à Lei 12.741/12
        (Transparência Fiscal), a LATAM informa o percentual aproximado dos
        tributos incidentes sobre suas operações de Transporte Aéreo Nacional de
        Passageiros: PIS (0,65%) e COFINS (3%).
      </p>
      <p>
        A LATAM Travel é a agência de viagens do Grupo LATAM e comercializa os
        seus produtos diretamente por seu site, Lojas físicas e Central de
        Vendas.
      </p>
      <p>
        Para compra de Pacotes de Viagem, Hospedagem, Aluguel de Carros, Seguros
        e demais serviços, entre em contato com a nossa Central de Vendas (todo
        o Brasil). Atendimento de segunda à sexta-feira, das 08h às 20h.
      </p>
    </section>
  );
};

export default InfoSection;

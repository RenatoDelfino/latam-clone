import React from "react";

const LegalDisclaimers = () => {
  return (
    <ul aria-hidden="true" className="terms">
      <h2>Informação geral de voos:</h2>
      <li>As imagens da cabine Premium Business são para referência.</li>
      <li>Sua escolha do voo de ida determinará o preço do voo de retorno.</li>
      <li>
        Os lugares e valores estão sujeitos a confirmação nos passos seguintes.
      </li>
      <li>O modelo do avião pode variar por motivos operacionais.</li>
      <li>
        Caso escolha uma tarifa que permita uma porcentagem ou a totalidade de
        devolução, considere que só poderá solicitar o reembolso antes do
        horário de saída do primeiro voo de seu itinerário.
      </li>
      <li>
        Lembre-se que para solicitar um Upgrade de cabine com trechos você deve
        ter adquirido sua passagem com tarifa Light, Plus, Top, Standard,
        Classic ou Full.
        <p>
          Lembre-se de que se sua tarifa for Light, você só poderá solicitar
          Upgrade de cabine com trechos para voos nacionais, dentro da América
          do Sul e Caribe, exceto voos regionais partindo do Brasil.
        </p>
        Crianças ou bebês viajando com tarifas com desconto não terão direito ao
        benefício Upgrade LATAM Pass. Para saber as condições da sua passagem,
        verifique os detalhes da tarifa que você comprou.
      </li>
      <li>
        Ao escolher um voo operado por outra companhia aérea, você poderá
        selecionar os assentos diretamente com essa companhia.
      </li>
      <li>
        Caso sua bagagem de mão exceda o tamanho ou peso máximos permitidos,
        você terá a opção de despachá-la por um custo extra. Se decidir não
        fazê-lo, não poderemos embarcar sua bagagem no voo nem seremos
        responsáveis por armazená-la.
      </li>
      <li>
        Para voos saindo de e chegando aos Estados Unidos, revise as
        <p> tarifas por bagagem e serviços opcionais</p>.
      </li>
    </ul>
  );
};

export default LegalDisclaimers;

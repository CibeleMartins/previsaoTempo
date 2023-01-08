// day
import nublado from "../assets/nublado.svg";
import ceuLimpo from "../assets/ceuLimpo.svg";
import poucasNuvens from "../assets/poucasNuvens.svg";
import nuvensDispersas from "../assets/nuvensDispersas.svg";
import nuvensQuebradas from "../assets/nublado.svg";
import chuvaDeBanho from "../assets/chuvaDeBanho.svg";
import chuva from "../assets/chuva.svg";
import trovoada from "../assets/trovoada.svg";
import neve from "../assets/neve.svg";
import nevoa from "../assets/névoa.svg";

// night
import ceuLimpoNoite from "../assets/night/ceuLimpo.svg";
import poucasNuvensNoite from "../assets/night/poucasNuvens.svg";
import nuvensDispersasNoite from "../assets/nuvensDispersas.svg";
import nuvensQuebradasNoite from "../assets/nublado.svg";
import chuvaDeBanhoNoite from "../assets/night/chuvaDeBanho.svg";
import chuvaNoite from "../assets/night/chuva.svg";
import trovoadaNoite from "../assets/night/trovoada.svg";
import neveNoite from "../assets/neve.svg";
import nevoaNoite from "../assets/névoa.svg";

const dayIcons = [
  nublado,
  ceuLimpo,
  poucasNuvens,
  nuvensDispersas,
  nuvensQuebradas,
  chuvaDeBanho,
  chuva,
  trovoada,
  neve,
  nevoa,
];

const nightIcons = [
  ceuLimpoNoite,
  poucasNuvensNoite,
  nuvensDispersasNoite,
  nuvensQuebradasNoite,
  chuvaDeBanhoNoite,
  chuvaNoite,
  trovoadaNoite,
  neveNoite,
  nevoaNoite,
];

const Icon = ({ climateDescription, className, hour }) => {
  const descriptionClimate = climateDescription
    .toLowerCase()
    .normalize("NFD")
    .replace(/\s/g, "")
    .replace(/[\u0300-\u036f]/g, "");
  console.log(descriptionClimate, hour);
  // descricao do clima se espacos e mnusculo
  if (hour <= 18) {
    // se o horario for anets da 18h

    let iconEqualDescription = "";

    dayIcons.map((i) => {
      if (i.toLowerCase().includes(descriptionClimate)) {
        return (iconEqualDescription = i);
      } else {
        return climateDescription
          .toLowerCase()
          .split(" ")
          .map((el) =>
            i.toLowerCase().includes(el) ? (iconEqualDescription = i) : null
          );
      }
    });
    return (
      <img
        alt="descriptionIcon"
        className={className}
        src={iconEqualDescription}
      />
    );
  } else {
    let iconEqualDescription = "";

    nightIcons.map((i) => {
      if (i.toLowerCase().includes(descriptionClimate)) {
        return (iconEqualDescription = i);
      } else {
        return climateDescription
          .toLowerCase()
          .split(" ")
          .map((el) =>
            i.toLowerCase().includes(el) ? (iconEqualDescription = i) : null
          );
      }
    });

    return (
      <img
        alt="descriptionIcon"
        className={className}
        src={iconEqualDescription}
      />
    );
  }
};

export default Icon;

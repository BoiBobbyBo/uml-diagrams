import { PureComponent as Component } from "react";
import Card from "./components/card/Card";

import cardImage from "../../../../assets/images/home/top/class.jpg";
import useCaseImage from "../../../../assets/images/home/top/usecase.jpg";
import sequenceImage from "../../../../assets/images/home/top/sequence.jpg";

const propTypes = {};

const defaultProps = {};

export const top = [
  {
    title: "Klašu diagramma",
    image: cardImage,
    desc: "Attēlo sistēmas statisko struktūru, parādot klases, to atribūtus, metodes un attiecības",
  },
  {
    title: "Lietošanas gadījumu diagramma",
    image: useCaseImage,
    desc: "Apraksta funkcionālos aspektus, parādot sistēmas mijiedarbību ar lietotājiem (aktieriem) un galvenās funkcijas (lietošanas gadījumus)",
  },
  {
    title: "Sekvenču diagramma",
    image: sequenceImage,
    desc: "Parāda mijiedarbības plūsmu starp objektiem, parādot, kā tie laika gaitā sazinās noteiktā scenārijā",
  },
];

class Top extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="flex flex-col gap-6">
        <h3 className="font-semibold text-2xl">Populārākās UML diagrammas</h3>

        <div className="flex flex-col lg:flex-row gap-6 justify-center">
          {top.map((item, index) => {
            return <Card key={index} item={item} />;
          })}
        </div>
      </div>
    );
  }
}

Top.propTypes = propTypes;

Top.defaultProps = defaultProps;

export default Top;

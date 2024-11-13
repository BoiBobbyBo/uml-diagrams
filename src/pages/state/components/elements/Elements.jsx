import { PureComponent as Component } from "react";

import Card from "./components/card/Card";

import start from "../../../../assets/images/state/elements/start.svg";
import end from "../../../../assets/images/state/elements/end.svg";
import arrow from "../../../../assets/images/state/elements/arrow.svg";
import state from "../../../../assets/images/state/elements/state.svg";
import activities from "../../../../assets/images/state/elements/activities.svg";
import guard from "../../../../assets/images/state/elements/guard.svg";
import join from "../../../../assets/images/state/elements/join.svg";
import fork from "../../../../assets/images/state/elements/fork.svg";
import nested from "../../../../assets/images/state/elements/nested.svg";

const propTypes = {};

const defaultProps = {};

export const elements = [
  {
    title: "Sākums",
    image: start,
    desc: "Objekta sākuma stāvoklis",
  },
  {
    title: "Beigas",
    image: end,
    desc: "Objekta stāvokļa vai dzīves cikla pabeigšana",
  },
  {
    title: "Pārejas",
    image: arrow,
    desc: "Savieno stāvokļus, kas norāda kustību vai pāreju no viena stāvokļa uz citu. Apzīmēti ar notikumiem vai nosacījumiem, kas izraisa izmaiņas",
  },
  {
    title: "Stāvoklis",
    image: state,
    desc: "Apzīmē dažādus apstākļus vai situācijas, kādos objekts var atrasties",
  },
  {
    title: "Stāvoklis ar aktivitātēm",
    image: activities,
    desc: "Stāvoklis var ietvert arī darbības, kas notiek, kad objekts atrodas šajā stāvoklī,<br>(entry / ieejot stāvoklī; do / notiek, kamēr esot stāvoklī; exit / izejot no stāvokļa ).<br>Šīs darbības tiek veiktas, līdz tiek aktivizēta pāreja uz nākamo stāvokli.",
  },
  {
    title: "Sazarojums",
    image: guard,
    desc: "Nosacījums, kas nosaka, vai notiks pāreja starp stāvokļiem atkarībā no tā, vai nosacījuma vērtība ir true vai false",
  },
  {
    title: "Apvienojums (Join)",
    image: join,
    desc: "Apvieno vairākas paralēlas plūsmas vienā",
  },
  {
    title: "Zarojums (Fork)",
    image: fork,
    desc: "Sadala vienu plūsmu vairākās paralēlās plūsmās",
  },
  {
    title: "Salikts stāvoklis",
    image: nested,
    desc: "Stāvoklis, kas ietver citus stāvokļus hierarhijā, lai attēlotu sarežģītāku uzvedību un struktūru",
  },
];

class Elements extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="flex flex-col gap-6">
        <h3 className="font-semibold text-2xl">Notācija</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-auto gap-x-4 gap-y-8">
          {elements.map((item, index) => {
            return <Card key={index} content={item} />;
          })}
        </div>
      </div>
    );
  }
}

Elements.propTypes = propTypes;

Elements.defaultProps = defaultProps;

export default Elements;

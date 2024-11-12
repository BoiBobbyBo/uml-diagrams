import { PureComponent as Component } from "react";
import { struct, behav } from "./typesList";

const propTypes = {};

const defaultProps = {};

class Types extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="flex flex-col gap-6">
        <h3 className="font-semibold text-2xl">UML diagrammu veidi</h3>

        <div className="flex flex-col lg:flex-row justify-between gap-12 sm:gap-20 items-center">
          <div className="flex flex-col gap-4 basis-1/2">
            <h4 className="font-semibold text-xl">Strukturālās (Structural)</h4>
            <p className="text-lg">
              Parāda sistēmas <span className="text-blue-700">statiskās </span>
              daļas, to arhitektūru un organizāciju, izmantojot komponentus,
              klases un to attiecības
            </p>

            <div className="mt-4 flex flex-wrap justify-center gap-x-6 gap-y-4 font-semibold">
              {struct.map((item, index) => {
                return (
                  <p
                    key={index}
                    className="w-full sm:w-auto border-2 border-solid rounded-lg py-1 px-6"
                  >
                    {item}
                  </p>
                );
              })}
            </div>
          </div>

          <div className="border-2 border-dashed w-full h-[2px] lg:w-[2px] lg:h-[330px]" />

          <div className="flex flex-col gap-4 basis-1/2">
            <h4 className="font-semibold text-xl">Uzvedības (Behavioral)</h4>
            <p className="text-lg">
              Parāda sistēmas <span className="text-blue-700">dinamiskās </span>
              daļas, kā sistēma uzvedas, mijiedarbojas, reaģē uz dažādiem
              ievadiem laika gaitā, izmantojot notikumus un procesus
            </p>

            <div className="mt-4 flex flex-wrap justify-center gap-x-6 gap-y-4 font-semibold">
              {behav.map((item, index) => {
                return (
                  <p
                    key={index}
                    className="w-full sm:w-auto border-2 border-solid rounded-lg py-1 px-6"
                  >
                    {item}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Types.propTypes = propTypes;

Types.defaultProps = defaultProps;

export default Types;

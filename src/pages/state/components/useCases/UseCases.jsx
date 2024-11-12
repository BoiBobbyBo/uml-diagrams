import { PureComponent as Component } from "react";

import { cases, problems } from "./list";
import Card from "./components/card/Card";

const propTypes = {};

const defaultProps = {};

class UseCases extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="flex flex-col gap-6">
        <h3 className="font-semibold text-2xl">Lietošanas gadījumi</h3>

        <div className="flex flex-col lg:flex-row gap-6 justify-between text-lg lg:items-center">
          <div className="basis-1/2 flex flex-col gap-4 text-left px-2">
            <h4 className="font-semibold">Kādas problēmas atrisina?</h4>
            <ul className="flex flex-col flex-wrap pl-5">
              {problems.map((item, index) => {
                return (
                  <li key={index} className="w-full list-disc">
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="border-2 border-dashed w-full h-[2px] lg:w-[2px] lg:h-[260px]" />

          <div className="basis-1/2 flex lg:flex-col flex-wrap lg:flex-nowrap gap-2 justify-center lg:justify-start">
            {cases.map((item, index) => {
              return <Card key={index} title={item} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}

UseCases.propTypes = propTypes;

UseCases.defaultProps = defaultProps;

export default UseCases;

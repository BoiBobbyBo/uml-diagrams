import { PureComponent as Component } from "react";

import About from "./components/about/About";
import Purpose from "./components/purpose/Purpose";
import UseCases from "./components/useCases/UseCases";
import Elements from "./components/elements/Elements";

class StatePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="flex flex-col gap-16">
        <div className="mt-24 sm:mt-16">
          <h1 className="my-6 font-semibold text-4xl sm:text-6xl">
            Stāvokļu diagramma
          </h1>
          <h2 className="text-xl sm:text-2xl font-bold">
            Uzvedības (Behavioral)
          </h2>
        </div>

        <About />
        <Purpose />
        <UseCases />
        <Elements />
      </div>
    );
  }
}

export default StatePage;

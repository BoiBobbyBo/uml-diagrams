import { PureComponent as Component } from "react";

import About from "./components/about/About";
import Purpose from "./components/purpose/Purpose";

class StatePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="flex flex-col gap-16">
        <div className="mt-16">
          <h1 className="my-6 font-semibold text-6xl">Stāvokļu diagramma</h1>
          <h2 className="text-2xl font-bold">Uzvedības (Behavioral)</h2>
        </div>

        <About />
        <Purpose />
      </div>
    );
  }
}

export default StatePage;

import { PureComponent as Component } from "react";
import About from "./components/about/About";
import Types from "./components/types/Types";
import Top from "./components/top/Top";
import Test from "../../components/test/test";

class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="flex flex-col gap-16 bg-white px-8 pb-8">
        <h1 className="mt-28 sm:mt-20 font-semibold text-4xl sm:text-6xl">
          UML diagrammas
        </h1>

        <About />
        <Types />
        <Top />
        <Test option="uml" />
        <span className="fixed bottom-0 right-0 text-gray-200 pr-20">
          Reinis palidzeja :)
        </span>
      </div>
    );
  }
}

export default HomePage;

import { PureComponent as Component } from "react";
import { top } from "./topList";
import Card from "./components/card/Card";

const propTypes = {};

const defaultProps = {};

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

import { PureComponent as Component } from "react";

import Card from "./components/card/Card";
import { elements } from "./list";

const propTypes = {};

const defaultProps = {};

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

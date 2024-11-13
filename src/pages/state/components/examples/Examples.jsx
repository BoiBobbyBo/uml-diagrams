import { PureComponent as Component } from "react";

import stateLogin from "../../../../assets/images/state/examples/state_login.svg";
import stateDoor from "../../../../assets/images/state/examples/state_door.png";

const propTypes = {};

const defaultProps = {};

class Examples extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="flex flex-col gap-6">
        <h3 className="font-semibold text-2xl">Piemēri</h3>

        <div className="flex gap-6 justify-center">
          <img
            src={stateLogin}
            className="border-4 border-solid rounded-xl p-6 w-full"
          />
        </div>

        <div className="flex gap-6 justify-center">
          <img src={stateDoor} className="border-4 border-solid rounded-xl p-6 w-full" />
        </div>
      </div>
    );
  }
}

Examples.propTypes = propTypes;

Examples.defaultProps = defaultProps;

export default Examples;

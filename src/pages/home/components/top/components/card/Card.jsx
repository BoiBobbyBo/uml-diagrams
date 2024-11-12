import { PureComponent as Component } from "react";
import PropTypes from "prop-types";

const propTypes = { item: PropTypes.object };

const defaultProps = {};

class Card extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { item } = this.props;
    return (
      <div className="flex basis-1/3 flex-col border-4 border-solid rounded-xl">
        <div className="flex h-[200px] overflow-hidden border-b-2  border-solid">
          <img
            src={item.image}
            className="w-full scale-150 lg:scale-125 object-cover object-center "
          ></img>
        </div>

        <div className="flex flex-col justify-center gap-4 p-6">
          <h4 className="text-xl font-semibold">{item.title}</h4>
          <p>{item.desc}</p>
        </div>
      </div>
    );
  }
}

Card.propTypes = propTypes;

Card.defaultProps = defaultProps;

export default Card;

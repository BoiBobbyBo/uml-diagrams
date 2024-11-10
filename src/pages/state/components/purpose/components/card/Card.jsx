import { PureComponent as Component } from "react";
import PropTypes from "prop-types";

const propTypes = { title: PropTypes.string, desc: PropTypes.string };

const defaultProps = {};

class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hover: false,
    };
  }

  onHover = () => {
    this.setState({ hover: true });
  };

  onLeave = () => {
    this.setState({ hover: false });
  };

  render() {
    const { hover } = this.state;
    const { title, desc } = this.props;

    return (
      <div className="relative w-full sm:w-auto">
        <div
          className="flex items-center justify-center border-4 border-solid border-b-0 sm:border-4 rounded-b-none rounded-xl sm:rounded-xl px-6 py-4 w-full sm:max-w-[260px]"
          onMouseEnter={this.onHover}
          onMouseLeave={this.onLeave}
        >
          <p className="text-lg font-semibold select-none">{title}</p>
        </div>

        <p
          className={`${
            hover ? "block" : "sm:hidden"
          } z-10 sm:absolute top-[-60%] left-1/2 sm:translate-x-[-50%] sm:w-[350px] sm:max-h-[120px] bg-white border-4 sm:border-2 border-solid p-2 rounded-b-xl sm:rounded-none`}
        >
          {desc}
        </p>
      </div>
    );
  }
}

Card.propTypes = propTypes;

Card.defaultProps = defaultProps;

export default Card;

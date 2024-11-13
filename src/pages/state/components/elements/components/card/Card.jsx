import { PureComponent as Component } from "react";
import PropTypes from "prop-types";

const propTypes = { content: PropTypes.object };

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
    const { content } = this.props;

    return (
      <div
        className="flex flex-col sm:gap-3 relative sm:hover:scale-105 transition-all duration-300 ease-in-out"
        onMouseEnter={this.onHover}
        onMouseLeave={this.onLeave}
      >
        <div className="flex items-center justify-center h-full py-4 border-4 border-solid rounded-t-xl sm:rounded-xl">
          <img src={content.image} className=""></img>
        </div>

        <h4 className="font-semibold text-lg border-x-4 border-solid sm:border-0 pt-4 sm:p-0">
          {content.title}
        </h4>

        <p
          className={`${
            hover ? "block" : "sm:hidden"
          } z-10 sm:absolute bottom-0 left-1/2 sm:translate-x-[-50%] sm:w-[305px] xl:w-[345px] sm:max-h-max bg-white border-t-0 border-4 sm:border-2 border-solid p-3 rounded-b-xl sm:rounded-none`}
          dangerouslySetInnerHTML={{ __html: content.desc }}
        />
      </div>
    );
  }
}

Card.propTypes = propTypes;

Card.defaultProps = defaultProps;

export default Card;

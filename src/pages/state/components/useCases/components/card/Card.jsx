import { PureComponent as Component } from "react";
import PropTypes from "prop-types";

const propTypes = { title: PropTypes.string };

const defaultProps = {};

class Card extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title } = this.props;
    return (
      <div className="self-end w-full sm:w-auto lg:w-[350px] border-4 border-solid rounded-xl px-4 py-2">
        {title}
      </div>
    );
  }
}

Card.propTypes = propTypes;

Card.defaultProps = defaultProps;

export default Card;

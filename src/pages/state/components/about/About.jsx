import { PureComponent as Component } from "react";

const propTypes = {};

const defaultProps = {};

class About extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="flex flex-col gap-6">
        <h3 className="font-semibold text-2xl">Kas ir Stāvokļu Diagramma?</h3>
        <p className="text-lg">
          Parāda objektu stāvokļus un pārejas starp tiem, reaģējot uz
          notikumiem, attēlojot dinamisko uzvedību un stāvokļu izmaiņas
        </p>
      </div>
    );
  }
}

About.propTypes = propTypes;

About.defaultProps = defaultProps;

export default About;

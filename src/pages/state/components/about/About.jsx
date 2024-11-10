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
          Stāvokļu diagramma attēlo objektu dažādus stāvokļus un pārejas starp
          tiem konkrētas sistēmas darbības laikā.
        </p>
      </div>
    );
  }
}

About.propTypes = propTypes;

About.defaultProps = defaultProps;

export default About;

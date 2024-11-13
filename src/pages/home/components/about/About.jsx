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
        <h3 className="font-semibold text-2xl">Kas ir UML diagrammas?</h3>
        <p className="text-lg">
          UML (Unified Modeling Language) diagrammas ir vizuāli rīki, ko
          izmanto, lai attēlotu sistēmas struktūru, uzvedību un mijiedarbību.{" "}
          <br />
          Tie palīdz skaidri parādīt sistēmas dizainu, funkcionalitāti un
          procesus
        </p>
      </div>
    );
  }
}

About.propTypes = propTypes;

About.defaultProps = defaultProps;

export default About;

import { PureComponent as Component } from "react";
import "./styles.css";

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className="header">
        <nav className="nav">
          <a href="/state" className="nav-link">
            Stāvokļa diagramma
          </a>
          <a href="/" className="nav-link">
            UML diagrammas
          </a>
          <a href="/component" className="nav-link">
            Komponenšu diagramma
          </a>
        </nav>
      </header>
    );
  }
}

export default Header;

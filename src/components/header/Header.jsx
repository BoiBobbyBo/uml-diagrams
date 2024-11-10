import { PureComponent as Component } from "react";

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className="flex justify-center w-full fixed top-0 left-0 bg-[#f8f9fa] py-2 px-5">
        <nav className="flex flex-wrap gap-x-10 gap-y-2 justify-center">
          <a
            href="/state"
            className="no-underline text-[#333] text-lg font-bold"
          >
            Stāvokļu diagramma
          </a>
          <a href="/" className="no-underline text-[#333] text-lg font-bold">
            UML diagrammas
          </a>
          <a
            href="/component"
            className="no-underline text-[#333] text-lg font-bold"
          >
            Komponenšu diagramma
          </a>
        </nav>
      </header>
    );
  }
}

export default Header;

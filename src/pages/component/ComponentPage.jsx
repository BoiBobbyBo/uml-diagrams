import { PureComponent as Component } from "react";
import myImage from "./component.drawio.png";
import myImage2 from "./component2.drawio.png";
import myImage3 from "./component3.drawio.png";

class ComponentPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        style={{
          textAlign: "center",
          padding: "3rem 2rem",
          background: "white",
        }}
      >
        <h1
          style={{
            padding: "2rem 0 1rem 0",
            fontSize: "3rem",
            fontWeight: "bold",
          }}
        >
          Komponenšu diagramma
        </h1>

        <h1
          style={{
            padding: "0rem 0 2rem 0",
            fontSize: "1.5rem",
            fontWeight: "bold",
          }}
        >
          Strukturas (structural)
        </h1>

        <h1 style={{ padding: "0rem 0 1rem 0", fontSize: "1.5rem" }}>
          Kas tā tāda ir?
        </h1>

        <p style={{ padding: "0rem 0 2rem 0" }}>
          Komponenšu diagrammas ir struktūras diagrammas, kas parāda sistēmas
          komponentes un to savstarpējās attiecības.
        </p>

        <img
          src={myImage} // Use the imported image
          alt="Komponenšu diagramma example"
          style={{
            display: "block",
            margin: "auto",
            width: "1000px",
            height: "auto",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          }}
        />

        <h1 style={{ padding: "2rem 0 1rem 0", fontSize: "1.5rem" }}>
          Viņas mērķis/kam to izmantot?
        </h1>

        <p style={{ padding: "0rem 0 2rem 0" }}>
          Komponentu diagrammas tiek izmantotas, lai viegli pārskatītu lielas un
          sarežģītas sistēmas no augstāka līmeņa, kā arī lai sadalītu lielus
          projektus mazākās, pārskatāmākās daļās, tādējādi atvieglojot
          orientēšanos un sapratni par projekta struktūru.
        </p>

        <img
          src={myImage2} // Use the imported image
          alt="Komponenšu diagramma example"
          style={{
            display: "block",
            margin: "auto",
            width: "1000px",
            height: "auto",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          }}
        />

        <h1 style={{ padding: "3rem 0 1rem 0", fontSize: "1.5rem" }}>
          Īss video
        </h1>
        <iframe
          width="100%" // Makes the iframe responsive
          height="650" // Adjust the height as needed
          src="https://www.youtube.com/embed/U0ssF7mvTk8" // YouTube embed URL
          title="YouTube video"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>

        <h1 style={{ padding: "3rem 0 1rem 0", fontSize: "1.5rem" }}>
          Piemērs ar dabas elementiem
        </h1>
        <img
          src={myImage3} // Use the imported image
          alt="Komponenšu diagramma example"
          style={{
            display: "block",
            margin: "auto",
            width: "1000px",
            height: "auto",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          }}
        />
      </div>
    );
  }
}

export default ComponentPage;

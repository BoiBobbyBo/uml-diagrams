import { PureComponent as Component } from "react";
import myImage from './component.drawio.png';
import myImage2 from './component2.drawio.png';
import myImage3 from './component3.drawio.png';
import myImage4 from './1.png';
import myImage5 from './2.png';
import myImage6 from './3.png';

class ComponentPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return ( 
      <div style={{ textAlign: "center", padding: "3rem 0" }}>

    <h1  style={{padding: "2rem 0 1rem 0", fontSize: "3rem", fontWeight: "bold",
    }}>Komponenšu diagramma</h1>

    <h1  style={{padding: "0rem 0 4rem 0", fontSize: "1.5rem" , fontWeight: "bold",
    }}>Strukturas (structural)</h1>

<div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: '20px', padding: '20px' }}>

  <div style={{width: "700px"}}>
    <h1  style={{padding: "0rem 0 3rem 0", fontSize: "2rem", fontWeight: "bold",}}>Kas ir komponenšu diagramma</h1>
    <p>Komponenšu diagramma ir viena no UML (Unified Modeling Language) diagrammām, kas tiek izmantota, lai attēlotu sistēmas struktūru un tās komponentes, kā arī to savstarpējās attiecības.</p>
  </div>
  <div>
  <img
    src={myImage} // Use the imported image
    alt="Komponenšu diagramma example"
    style={{
      display: "block",
      margin: "auto",
      width: "900px",
      height: "auto",
      borderRadius: "10px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)"
    }}
  />
  </div>
</div>
{/*--------------------------------- */}

<div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between', gap: '20px', padding: '4rem 20px 20px 20px' }}>

<div>
    <h1  style={{padding: "0rem 0 3rem 0", fontSize: "2rem", fontWeight: "bold",}}>Viņas mērķis/kam to izmantot?</h1>
    <p>Komponentu diagrammas tiek izmantotas, lai viegli pārskatītu lielas un sarežģītas sistēmas no augstāka līmeņa, kā arī lai sadalītu lielus projektus mazākās, pārskatāmākās daļās, tādējādi atvieglojot orientēšanos un sapratni par projekta struktūru.</p>
  </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', padding: '0 5rem 0 0', gap: '20px' }}>
      <div style={{
          border: '1px solid white', // White border
          borderRadius: '8px',
          padding: '15px',
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
          backgroundColor: 'none', // No background color
          width: '250px'
        }}>
          <h3 style={{ margin: 0 }}>Modularitāte</h3>
        </div>
        <div style={{
          border: '1px solid white', // White border
          borderRadius: '8px',
          padding: '15px',
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
          backgroundColor: 'none', // No background color
          width: '250px'
        }}>
          <h3 style={{ margin: 0 }}>Sistēmas struktūras izpratne</h3>
        </div>
        <div style={{
          border: '1px solid white', // White border
          borderRadius: '8px',
          padding: '15px',
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
          backgroundColor: 'none', // No background color
          width: '250px'
        }}>
          <h3 style={{ margin: 0 }}>Izmaiņu ieviešana</h3>
        </div>
        <div style={{
          border: '1px solid white', // White border
          borderRadius: '8px',
          padding: '15px',
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
          backgroundColor: 'none', // No background color
          width: '250px'
        }}>
          <h3 style={{ margin: 0 }}>Komponentu aizvietošana</h3>
        </div>
      </div>
    </div>

{/*--------------------------------- */}


<h1  style={{padding: "0rem 0 3rem 0", fontSize: "2rem", fontWeight: "bold",}}>Kādas problēmas risina komponenšu diagramma?</h1>

<div style={{ display: 'flex', flexDirection: 'row', gap: '20px', padding: '20px' }}>
      {/* Card 1 */}
      <div
        style={{
          border: '1px solid white', // White border
          borderRadius: '8px',
          padding: '10px',
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
          backgroundColor: 'none', // No background color
          width: '400px',
        }}
      >
        <h3 style={{ margin: 0, fontSize: '24px', borderBottom: '2px solid #ddd', paddingBottom: '10px' }}>
        Sistēmas sarežģītības pārvaldība
        </h3>
        <p> Lielas sistēmas bieži vien ir ļoti sarežģītas, ar daudzām mijiedarbībām starp dažādām sastāvdaļām.</p>
      </div>

      {/* Card 2 */}
      <div
        style={{
          border: '1px solid white', // White border
          borderRadius: '8px',
          padding: '10px',
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
          backgroundColor: 'none', // No background color
          width: '400px',
        }}
      >
        <h3 style={{ margin: 0, fontSize: '24px', borderBottom: '2px solid #ddd', paddingBottom: '10px' }}>
        Komponentu atkarību identifikācija
        </h3>
        <p>Bez skaidras atkarību izpratnes var būt grūti izdarīt izmaiņas sistēmā, neizraisot nevēlamas sekas.</p>
      </div>

      {/* Card 3 */}
      <div
        style={{
          border: '1px solid white', // White border
          borderRadius: '8px',
          padding: '10px',
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
          backgroundColor: 'none', // No background color
          width: '400px',
        }}
      >
        <h3 style={{ margin: 0, fontSize: '24px', borderBottom: '2px solid #ddd', paddingBottom: '10px' }}>
        Izstrādes un uzturēšanas laika samazināšana
        </h3>
        <p>Projektējot un uzturot sistēmas, ir svarīgi novērst lieku darbu un neskaidrības.</p>
      </div>

      {/* Card 4 */}
      <div
        style={{
          border: '1px solid white', // White border
          borderRadius: '8px',
          padding: '10px',
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
          backgroundColor: 'none', // No background color
          width: '400px',
        }}
      >
        <h3 style={{ margin: 0, fontSize: '24px', borderBottom: '2px solid #ddd', paddingBottom: '10px' }}>
        Kompleksu sistēmu uzturēšanas vienkāršošana
        </h3>
        <p>Lielas un sarežģītas sistēmas prasa biežu uzturēšanu un izmaiņas, kas var būt izaicinājums.</p>
      </div>
    </div>
{/*--------------------------------- */}
    <h1 style={{padding: "3rem 0 1rem 0", fontSize: "2rem", fontWeight: "bold" ,
    }}>Komponentes pamatdaļas/elementi</h1>
    <img
    src={myImage2} // Use the imported image
    alt="Komponenšu diagramma example"
    style={{
      display: "block",
      margin: "auto",
      width: "900px",
      height: "auto",
      borderRadius: "10px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)"
    }}
  />


<h1 style={{padding: "3rem 0 1rem 0", fontSize: "2rem", fontWeight: "bold" ,
    }}>Vai tu atceries ko tu izlasiji?</h1>
<iframe src="https://s8wrb6th95u.typeform.com/to/xHnRsbqt" width="100%" height="500px" frameborder="0"></iframe>

  </div>

    )
    
  };

}

export default ComponentPage;

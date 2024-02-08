import './App.css';
import Encabezado from './componentes/compartidos/Encabezado';
import Pie from './componentes/compartidos/Pie';
import Principal from './componentes/compartidos/Principal';
import Lista from './componentes/lista/Lista';
import Detalles from './componentes/nueva/Detalles';

function App() {
  return (
    <div className="App">
      {/* importamos los componentes para despues renderizarlos */}
      <Encabezado />
      <Principal>
        {/* <Lista></Lista> */}
        <Detalles></Detalles>
      </Principal>
      <Pie />
    </div>
  );
}

export default App;

import './App.css';
import Encabezado from './componentes/compartidos/Encabezado';
import Pie from './componentes/compartidos/Pie';
import Principal from './componentes/compartidos/Principal';
import Meta from './componentes/lista/Metas';

function App() {
  return (
    <div className="App">
      {/* importamos los componentes para despues renderizarlos */}
      <Encabezado/>
      <Principal>
      <Meta></Meta>
      </Principal>
      <Pie/>
    </div>
  );
}

export default App;

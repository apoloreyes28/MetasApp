import './App.css';
import Encabezamiento from './componentes/compartidos/Encabezamiento';
import Pie from './componentes/compartidos/Pie';
import Principal from './componentes/compartidos/Principal';

function App() {
  return (
    <div className="App">
      {/* importamos los componentes para despues renderizarlos */}
      <Encabezamiento/>
      <Principal/>
      <Pie/>
    </div>
  );
}

export default App;

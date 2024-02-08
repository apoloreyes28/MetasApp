import Vinculo from './Vinculo';
import estilos from './Principal.module.css';
// lo importamos como si fuera un objeto
import { ReactComponent as ListaSVG} from '../../img/lista.svg';
import { ReactComponent as NuevaSVG} from '../../img/nueva.svg';

function Principal({ children }) {
    // { children } es un prop (propiedad) que le pasamos al componente
    return (
        <div className={estilos.principal}>
            <aside className={estilos.aside}>
                <Vinculo 
                to="/lista" 
                texto="Lista de Metas"
                Icono={ListaSVG}
                />
                <Vinculo 
                to="/nueva" 
                texto="Nueva Meta"
                Icono ={NuevaSVG}
                />
            </aside>
            <main className={estilos.main}>
                {children}
            </main>
        </div>
    );
}

export default Principal;
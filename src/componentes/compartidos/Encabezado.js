import './Encabezado.css';
import { ReactComponent as Logo } from '../../img/logo.svg';
import { ReactComponent as Perfil } from '../../img/perfil.svg';

function Encabezado() {
    return (
        <div className="encabezado">
            <div className="contenedor">
                {/* imagen (logo) svg */}
                <Logo className='logo'/>
                <a href="/" className='titulo'>Metas App</a>
            </div>
            <nav>
                <a href="/perfil" className="vinculo">
                <Perfil className='icono'></Perfil>
                </a>
            </nav>
        </div>
    );
}

export default Encabezado;
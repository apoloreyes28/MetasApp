import { Link } from 'react-router-dom';
import estilos from './Vinculo.module.css';

function Vinculo({ Icono, texto, to }) {
    // le pasamos 3 props: icono, texto y enlace
    return (
        <Link to={to} className={estilos.vinculo}>
            <Icono className={estilos.icono} />
            {texto && <span className={estilos.texto}>{texto}</span>}
        </Link>
    );
}

export default Vinculo;
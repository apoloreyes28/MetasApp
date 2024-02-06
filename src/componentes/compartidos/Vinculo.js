import estilos from './Vinculo.module.css';

function Vinculo({ Icono, texto, href }) {
    // le pasamos 3 props: icono, texto y enlace
    return (
        <div>
            <a href={href} className={estilos.vinculo}>
                <Icono className={estilos.icono}/>
                {texto && <span className={estilos.texto}>{texto}</span>}
                {/* esto es como un condicional ternario if ?   else :
                    si hay texto puede renderizar la etiqueta span 
                    && si no hay texto no va renderizar (hacer) nada 
                */}
            </a>
        </div>
    );
}

export default Vinculo;
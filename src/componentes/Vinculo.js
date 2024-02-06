function Vinculo({ children, texto, href }) {
    // le pasamos 3 props: icono, texto y enlace
    return (
        <div>
            <a href={href} className="vinculo">
                {children}
                <span>{texto}</span>
            </a>
        </div>
    );
}

export default Vinculo;
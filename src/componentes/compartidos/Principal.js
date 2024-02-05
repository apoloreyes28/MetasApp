function Principal({ children }) {
    // { children } es un prop (propiedad) que le pasamos al componente
    return (
        <>
            <sidenav>
                <a href="/lista">Lista</a>
                <a href="/crear">Crear</a>
            </sidenav>
            <main>
                {children}
            </main>
        </>
    );
}

export default Principal;
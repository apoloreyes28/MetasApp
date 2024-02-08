function Detalles() {

    const frecuancias = ["día", "semana", "mes", "año"];
    const iconos = ["🏃", "✈️", "📖", "🐕", "💵"];

    return (
        <div>
            <form>
                <label>
                    Describe tu meta
                    <input placeholder="ej. 52 caminatas" />
                </label>
                <label>
                    ¿Con que frecuencia deseas cumplir tu meta? <span>(ej. 1 vez a la semana)</span>
                    <div>
                        <input type="number" />
                        <select>
                            {frecuancias.map(opcion => <option value={opcion}>{opcion}</option>)}

                            {/* 
                            <option value="día">al día</option>
                            <option value="semana">a la semana</option>
                            <option value="mes">al mes</option>
                            <option value="año">al año</option> 
                            */}
                        </select>
                    </div>
                </label>
                <label>
                    ¿Cuantas veces deseas completar esta meta?
                    <input type="number" />
                </label>
                <label>
                    ¿Tienes una fecha límite?
                    <input type="date" />
                </label>
                <label>
                    ¿Cuantas veces haz completado ya esta meta?
                    <input type="number" />
                </label>
                <label>
                    Escoge el icono para la meta
                    <select>
                        {iconos.map(opcion => <option value={opcion}>{opcion}</option>)}
                        {/* 
                        <option value="🏃">🏃</option>
                        <option value="✈️">✈️</option>
                        <option value="📖">📖</option>
                        <option value="🐕">🐕</option>
                        <option value="💵">💵</option> 
                        */}
                    </select>
                </label>
            </form>
            <div>
                <buttom>Crear</buttom>
                <buttom>Cancelar</buttom>
            </div>
        </div>
    );
}

export default Detalles;

// <></>
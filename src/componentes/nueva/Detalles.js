import estilos from './Detalles.module.css';

function Detalles() {

    const frecuancias = ["día", "semana", "mes", "año"];
    const iconos = ["🏃", "✈️", "📖", "🐕", "💵"];

    return (
        <div className='tarjeta'>
            <form className='p-4'>
                <label className='label'>
                    Describe tu meta
                    <input 
                    className='input'
                    placeholder="ej. 52 caminatas" />
                </label>
                <label className='label'>
                    ¿Con que frecuencia deseas cumplir tu meta? <span>(ej. 1 vez a la semana)</span>
                    <div className='flex mb-6'>
                        <input
                        className='input mr-6' 
                        type="number" />
                        <select className="input">
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
                <label className='label'>
                    ¿Cuantas veces deseas completar esta meta?
                    <input type="number" />
                </label>
                <label className='label'>
                    ¿Tienes una fecha límite?
                    <input 
                    className='input'
                    type="date" />
                </label>
                <label className='label'>
                    ¿Cuantas veces haz completado ya esta meta?
                    <input 
                    className='input'
                    type="number" />
                </label>
                <label className='label'>
                    Escoge el icono para la meta
                    <select className="input">
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
            <div className={estilos.botones}>
                <buttom className="boton boton--negro">Crear</buttom>
                <buttom className="boton boton--gris">Cancelar</buttom>
            </div>
        </div>
    );
}

export default Detalles;

// <></>
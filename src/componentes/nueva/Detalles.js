import { useEffect, useState, useContext } from 'react';
import { Contexto } from "../../servicios/Memoria";
import estilos from './Detalles.module.css';
import { useNavigate, useParams } from 'react-router-dom';

function Detalles() {

    const { id } = useParams();
    // console.log(id);

    const [form, setForm] = useState({
        detalles: '',
        eventos: '1',
        periodo: 'semana',
        icono: '🏃',
        meta: 52,
        plazo: '2030-01-01',
        completado: 0
    });

    const onChange = (event, prop) => {
        setForm((estado) => ({ ...estado, [prop]: event.target.value }));
    };

    useEffect(() => {
        const metaMemoria = estado.objetos[id];
        if (!id) return;// si no hay (encuentra) la ID no hacemos nada...
        if (!metaMemoria) {
            return navegar('/404');// esto nos manda a otra página
        }
        setForm(metaMemoria);
        // este código (hook) va correr cuando cambiemos la ID
    }, [id]);

    const navegar = useNavigate();

    const crear = () => {
        enviar({ tipo: 'crear', meta: form });
        navegar('/lista');
    }

    const actualizar = () => {
        enviar({ tipo: 'actualizar', meta: form });
        navegar('/lista');
    }


    const borrar = () => {
        enviar({ tipo: 'borrar', id});
        navegar('/lista');
    }

    const cancelar = () => {
        navegar('/lista');// nos va regresar a la página de inicio
    }

    const [estado, enviar] = useContext(Contexto);

    // extraemos a cada uno de los elementos del estado
    const { detalles, eventos, periodo, icono, meta, plazo, completado } = form;

    const frecuancias = ["día", "semana", "mes", "año"];
    const iconos = ["🏃", "✈️", "📖", "🐕", "💵"];

    return (
        <div className='tarjeta'>
            <form className='p-4'>
                <label className='label'>
                    Describe tu meta
                    <input
                        className='input'
                        placeholder="ej. 52 caminatas"
                        value={detalles}
                        onChange={(e) => onChange(e, "detalles")}
                    />
                </label>
                <label className='label'>
                    ¿Con que frecuencia deseas cumplir tu meta? <span>(ej. 1 vez a la semana)</span>
                    <div className='flex mb-6'>
                        <input
                            className='input mr-6'
                            type="number"
                            value={eventos}
                            onChange={(e) => onChange(e, "eventos")}
                        />
                        <select
                            className="input"
                            value={periodo}
                            onChange={(e) => onChange(e, "periodo")}
                        >
                            {frecuancias.map(opcion => <option value={opcion}>{opcion}</option>)}
                        </select>
                    </div>
                </label>
                <label className='label'>
                    ¿Cuantas veces deseas completar esta meta?
                    <input
                        type="number"
                        className='input'
                        value={meta}
                        onChange={(e) => onChange(e, "meta")}
                    />
                </label>
                <label className='label'>
                    ¿Tienes una fecha límite?
                    <input
                        className='input'
                        type="date"
                        value={plazo}
                        onChange={(e) => onChange(e, "plazo")}
                    />
                </label>
                <label className='label'>
                    ¿Cuantas veces haz completado ya esta meta?
                    <input
                        className='input'
                        type="number"
                        value={completado}
                        onChange={(e) => onChange(e, "completado")}
                    />
                </label>
                <label className='label'>
                    Escoge el icono para la meta
                    <select
                        className="input"
                        value={icono}
                        onChange={(e) => onChange(e, "icono")}
                    >
                        {iconos.map(opcion => <option value={opcion}>{opcion}</option>)}
                    </select>
                </label>
            </form>
            <div className={estilos.botones}>
                {!id && <buttom
                    className="boton boton--negro"
                    onClick={crear}>Crear
                </buttom>}

                {id && <buttom
                    className="boton boton--negro"
                    onClick={actualizar}>Actualizar
                </buttom>}

                {id && <buttom
                    className="boton boton--rojo"
                    onClick={borrar}>Borrar
                </buttom>}

                <buttom
                    className="boton boton--gris"
                    onClick={cancelar}>Cancelar
                </buttom>
            </div>
        </div>
    );
}

export default Detalles;

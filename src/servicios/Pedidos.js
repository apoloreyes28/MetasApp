/*
Aqui vamos a crear diferentes servicios para hacer pedidos al Back-end:
- Pedir una meta
- Pedir todas las metas
- Actualizar una meta
- Borrar una meta
*/

export async function pedirMetas() {
    // servicio para pedir metas, para esto hacemos un pedido al Back-end 
    // usando la API Rest fetch(), la cual retorna archivos JSON desde un
    // servidor a partir de una URL (link, enlace)
    const response = await fetch('/metas.json');// fetch() es un método asincrono

    const metas = await response.json();// convertimos a formato JSON

    return metas;
}


export async function pedirMeta() {
    const response = await fetch('/meta.json');
    const meta = await response.json();
    return meta;
}


export async function crearMeta() {
    const response = await fetch('/meta.json');
    const metaCreada = await response.json();
    console.log('Meta creada!', metaCreada);
    return metaCreada;
}


export async function actualizarMeta() {
    const response = await fetch('/meta.json');
    const metaActualizada = await response.json();
    console.log('Meta actualizada!', metaActualizada)
    return metaActualizada;
}


export async function borrarMeta() {
    const response = await fetch('/meta.json');
    console.log('Meta borrada!', response.id);
    return response.id;
}

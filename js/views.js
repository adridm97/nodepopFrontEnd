export function adView(ad) {
    return `
    <link rel="stylesheet" href="style.css">
    <a href="/detail.html?id=${ad.id}"class="enlaces">
    <div class="post">
        <strong class="nombre">${ad.nombre}</strong>
        <p class="precio">Precio: ${ad.precio}</p>
        <p class="estado">Estado: ${ad.estado}</p>
        <img class="foto" src="${ad.foto}" alt="foto"></img>
    </div>
</a>`
}


export function errorView(message) {
    return `<div class="error">
        ${message}
        <button>Cerrar</button>
    </div>`
}


export function successView(message) {
    return `<div class="success">
        ${message}
        <button>Cerrar</button>
    </div>`
}


export function loaderView() {
    return '<div class="lds-ring"><div></div><div></div><div></div><div></div></div>'
}


export function adDetailView(ad) {
    if (ad === null) {
        return '<h1>:( No se han encontrado anuncios</h1>'
    }
    let button = ''
    if (ad.canBeDeleted) {
        button = '<button class="delete">Borrar</button>'
    }
    return `    
    <link rel="stylesheet" href="style.css">
    <div class="post">
    <strong class="nombre">${ad.nombre}</strong>
    <p class="precio">${ad.precio}</p>
    <p class="estado">${ad.estado}</p>
    <img class="foto" src="${ad.foto}" alt="foto"></img>
    ${button}
    </div>
    `
}
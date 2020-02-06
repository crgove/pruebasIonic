export interface IProductTecnologia {
    "key": string,
    "id": number,
    "nombre": string, 
    "precio": number,
    "descripcion": string,
    "estado": string,
    "idUsuario": number, 
    "favorito": string

}

export interface IFavorito {
    "key": string,
    "id": number,
    "nombre": string, 
    "precio": number,
    "descripcion": string
}

export interface IHogar {
    "key": string,
    "id": number,
    "nombre": string, 
    "precio": number,
    "descripcion": string,
    "idUsuario": number, 
    "favorito": string

}

export interface IInmobiliaria {
    "key": string,
    "id": number,
    "nombre": string, 
    "precio": number,
    "descripcion": string,
    "metrosCuadrados": number, 
    "habitaciones": number,
    "banyos": number,
    "localidad": string,
    "idUsuario": number, 
    "favorito": string

}
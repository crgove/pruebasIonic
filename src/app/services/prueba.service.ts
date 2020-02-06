import {Injectable} from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { IProductTecnologia } from '../interfaces';




@Injectable()

export class PruebaService {
productosTecnologia: (IProductTecnologia)[]=[];
key: string;
//producto: IProduct;
nombre: string;
id: number;
precio: number;
descripcion: string;

tipo: string;
km: number;
anyo: number;

metrosCuadrados: number;
habitaciones: number;
banyos: number;
localidad: string;

estado: string;
favorito: string;



    
constructor(private _db: AngularFireDatabase){
    
}


getProductosTecnologia(): firebase.database.Reference{
        //devolvemos la referencia y no el array
        let referencia = this._db.database.ref("ProductosTecnologia");
        return referencia;
}


getProductosHogar(): firebase.database.Reference{
        //devolvemos la referencia y no el array
        let referencia = this._db.database.ref("ProductosHogar");
        return referencia;
}

getProductosFavoritos(): firebase.database.Reference{
        let referencia = this._db.database.ref("ProductosFavoritos");
        return referencia;
}

favoritosProductoTecnologia(key) {
        let ref = this._db.database.ref("ProductosTecnologia");
        ref.child(key).child('favorito').set('si');

}

favoritosProductoHogar(key) {
        let ref = this._db.database.ref("ProductosHogar");
        ref.child(key).child('favorito').set('si');

}

modificarNombreRaton(){
        let ref = this._db.database.ref("ProductosTecnologia");
        //ref.child(key).child('nombre').set('logitech moussee');

        this.productosTecnologia;

        ref.orderByChild('nombre').equalTo('logitech mousse').once("value", snapshot => {
                snapshot.forEach(child => {
                let clave = child.key;
                console.log("KEY VALE " + clave);
                ref.child(clave).child('nombre').set('raton');
        })
        })


}

}

import { Component, OnInit } from '@angular/core';
import { IFavorito } from '../interfaces';
import { PruebaService } from '../services/prueba.service';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.page.html',
  styleUrls: ['./favoritos.page.scss'],
})
export class FavoritosPage implements OnInit {

  productosFavoritos: (IFavorito)[]=[];

  id: number
  key:string;
  nombre: string;
  precio: number;
  descripcion: string;


  constructor(private _pruebaService: PruebaService, private _db: AngularFireDatabase) { }

  ngOnInit() {

    this.productosFavoritos;
    let referencia = this._pruebaService.getProductosFavoritos();
    referencia.on("value", snapshot =>{
      snapshot.forEach(child =>{

        let val = child.val();
        val.key = child.key;
        this.productosFavoritos.push(val);
        console.log("He encontrado con la key " + child.key);
      })
    })
  }

}

import { Component, OnInit, ɵConsole } from '@angular/core';
import { IProductTecnologia, IHogar } from '../interfaces';
import { PruebaService } from '../services/prueba.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { AngularFireDatabase } from '@angular/fire/database';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {

  productosTecnologia: (IProductTecnologia)[] = [];
  productosHogar: (IHogar)[]=[];
  //productoTecnologia: {"key": "", "id": "", "nombre": "", "precio": null, "descripcion": "", "estado": ""};
  //productoTecnologia: IProductTecnologia;

  id: number
  key:string;
  nombre: string;
  precio: number;
  descripcion: string;
  favoritos: string;

  tipo: string;
  km: number;
  anyo: number;

  metrosCuadrados: number;
  habitaciones: number;
  banyos: number;
  localidad: string;

  estado: string;



  constructor(private _toastCtr: ToastController, private _pruebaService: PruebaService, private _db: AngularFireDatabase) { }

  async presentToast() {
    const toast = await this._toastCtr.create({
      message: 'Su producto ha sido modificado',
      duration: 2000
    });
    toast.present();
  }

  async OtherpresentToast() {
    const toast = await this._toastCtr.create({
      message: 'Su producto ya está marcado como favorito',
      duration: 2000
    });
    toast.present();
  }

  

  ngOnInit() {


    this.productosTecnologia;
    let referencia = this._pruebaService.getProductosTecnologia();
    referencia.on("value", snapshot =>{
      snapshot.forEach(child =>{

        let val = child.val();
        val.key = child.key;
        this.productosTecnologia.push(val);
        console.log("He encontrado con la key " + child.key + "favorito" + child.val().favorito);
      })
    })

    this.productosHogar;
    let ref = this._pruebaService.getProductosHogar();
    ref.on("value", snapshot =>{
      snapshot.forEach(child =>{

        let val = child.val();
        val.key = child.key;
        this.productosHogar.push(val);
        console.log("He encontrado con la key " + child.key);
      })
    })




  }

  AnyadirfavoritosTecnologia(key: string, favorito: string){

    console.log("KEY" + key);
    if(favorito === "no") {
      this._pruebaService.favoritosProductoTecnologia(key);
      this.presentToast();
    } else {
      this.OtherpresentToast();
    }
  }

  AnyadirfavoritosHogar(key: string, favorito: string){

    console.log("KEY" + key);
    if(favorito === "no") {
      this._pruebaService.favoritosProductoHogar(key);
      this.presentToast();
    } else {
      this.OtherpresentToast();
    }
  }


  modificarNombre(nombre: string){

    if(nombre === 'logitech mousse'){
      this._pruebaService.modificarNombreRaton();
      this.presentToast();
    }else {
      this.OtherpresentToast();
    }

  }

}

import { Component } from '@angular/core';
import { PruebaService } from '../services/prueba.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private _pruebaService: PruebaService, private _activatedRoute: ActivatedRoute) {}

}

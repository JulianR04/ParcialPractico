import { Component, OnInit } from '@angular/core';
import { Restaurante } from './restaurante';
import { RestauranteService } from './restaurante.service';

@Component({
  selector: 'app-restaurante',
  templateUrl: './restaurante.component.html',
  styleUrls: ['./restaurante.component.css']
  
})
export class RestauranteComponent implements OnInit {

  constructor(private restauranteService: RestauranteService) { }
  mejorRestaurante : number = 0;
  restaurantes: Array<Restaurante> = [];
  getRestaurantes(){
    this.restauranteService.getRestaurantes().subscribe(
      (data) => {
        this.restaurantes = data;
        this.mejorRestaurante = this.restauranteService.getMejorRestaurante(this.restaurantes);
      }
    );
  }
  ngOnInit() {
  }

}



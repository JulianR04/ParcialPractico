import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Restaurante} from './restaurante';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
  export class SerieService {
    private apiUrl = 'https://gist.githubusercontent.com/t-montes/5ebece61782d6a06656b71a155ef0698/raw/2f50ca1a3d760da3535d2f374e84d7ea5193faa4/international-restaurants.json'
  
  constructor(private http:HttpClient) { }
  
    getRestaurantees(): Observable<Restaurante[]>{
      return this.http.get<Restaurante[]>(this.apiUrl);
    }
  

    mejorRestaurante: Restaurante | null = null;

    getMejorRestaurante(restaurante: Array<Restaurante>) {
      if (this.restaurante.length === 0) {
        this.mejorRestaurante = null;
        return mejorRestaurante;
      }
  }
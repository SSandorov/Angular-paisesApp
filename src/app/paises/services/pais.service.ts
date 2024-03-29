import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Country } from '../interfaces/pais-interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = "https://restcountries.com/v3.1";

  constructor(private http: HttpClient) { }

  // Con quicktype.io creamos la interfaz de un pais que nos devuelve la API. Y nuestra función buscarPais devuelve un array de la interfaz
  buscarPais(termino: string): Observable<Country[]> {
    const url = `${ this.apiUrl }/name/${termino}`;

    return this.http.get<Country[]>(url);
  }

}

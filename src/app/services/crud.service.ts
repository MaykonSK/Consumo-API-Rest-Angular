import { HttpClient } from '@Angular/common/http'
import { Imagens } from './../models/placeholder.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

//para o metodo observable funcionar, precisa retornar um http
//entao é necessario inserir no construtor
constructor(private http: HttpClient) { }

//criar metodo para retornar um tipo de informação Observable
//tipo de dado <>
//qual tipo de dados vai ser retornado? não sabe? use o tipo <any>
//caso saiba o tipo de dado, crie uma interface com os tipos
public getFotos(): Observable<any> {
  //utilizando o http que criou
  //get espera um parametro, que é o endereço
  return this.http.get('https://jsonplaceholder.typicode.com/photos')
}

}

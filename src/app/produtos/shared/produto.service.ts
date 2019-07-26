import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produto } from './produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  private URL = 'api/produtos';
  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get<Produto[]>(this.URL);
  }

  getById(id: number){

  }

  insert(produto: Produto){

  }

  update(produto: Produto){

  }
  remove(id: number){

  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produto } from './produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  private URL = 'api/produtos';
  constructor(private http: HttpClient) { }
  private listagem:any = [];

  getAll(){
    return this.http.get<Produto[]>(this.URL);
    // NAO EH PRECISO TIPAGEM, EXEMPLO:
    // return this.http.get(this.URL);
  }

  getById(id: number){
    const url = `${this.URL}/${id}`;
    return this.http.get<Produto>(url);
  }

  insert(produto: Produto){
    return this.http.post<Produto>(this.URL,produto);
  }

  update(produto: Produto){
    return this.http.put<Produto>(this.URL,produto);
  }
  remove(id: number){
    const url = `${this.URL}/${id}`;
    return this.http.delete<Produto>(url);
  }
}

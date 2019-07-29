import { ProdutoService } from './../shared/produto.service';
import { Component, OnInit } from '@angular/core';
import {Produto} from '../shared/produto';

@Component({
  selector: 'app-produto-list',
  templateUrl: './produto-list.component.html',
  styleUrls: ['./produto-list.component.css']
})
export class ProdutoListComponent implements OnInit {
  title: string = 'Produtos';
  produtos: Produto[];

  constructor(private produtoService: ProdutoService) { }

  ngOnInit() {
    this.getAll();
  }

  getAll(){
    this.produtoService.getAll().subscribe(resp => {
      this.produtos = resp ;
    });
  }

  remove(produto: Produto){
    this.produtoService.remove(produto.id).subscribe(() => {
      // PODE BUSCAR TODOS NOVAMENTE 
      //this.getAll();
      //OU FAZER FILTRO TRAZENDO TODOS OS PRODUTOS COM EXECESSAO DO PRODUTO REMOVIDO
      this.produtos = this.produtos.filter(p=> p!== produto);
    });
  }

}

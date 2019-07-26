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

}

import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryData implements InMemoryDbService {
  createDb() {
    const produtos = [
      { id: 1, nome: 'Hambúrguer', descricao: 'Pão, bife de hambúrguer 90g, salada e batata.', preco: 8.50 },
      { id: 2, nome: 'X-Búrguer', descricao: 'Pão, bife de hambúrguer 90g, 1 fatia de queijo, salada e batata.', preco: 10.50 },
      { id: 3, nome: 'X-Bacon', descricao: 'Pão, bife de hambúrguer 90g, 1 fatia de queijo, 2 fatia de bacon, salada e batata.', preco: 12.50 },
      { id: 4, nome: 'X-Tudo', descricao: 'Pão, 2 bifes de hambúrguer 90g, 2 fatias de queijo, 4 fatias de bacon, salada e batata.', preco: 14.50 },
      { id: 5, nome: 'X-Vegano', descricao: 'Pão, tofu, alface,tomate, rucula, brocolis e tomate.', preco: 7.50 },
      { id: 6, nome: 'X-Galinha', descricao: 'Pão, frango, requeijão azeitona e ovo cozido.', preco: 8.50 },
      { id: 7, nome: 'Cachorro Quente Simples', descricao: 'Pão, 1 salsicha, molho, mostarda e cacthup', preco: 7.50 },
      { id: 8, nome: 'Cachorro Quente COMPLETO', descricao: 'Pão, 2 salsicha, molho, mostarda , cacthup , ovo cuzido e queijo', preco: 10.00 },
      { id: 9, nome: 'Coca Cola', descricao: 'lata', preco: 3.00 },
      { id: 10, nome: 'Torrada Simples', descricao: 'pao queijo , presunto e maionese', preco: 7.50 },      
      { id: 11, nome: 'Torrada Dupla', descricao: 'pao ovo, queijos ,presuntos e maionese', preco: 9.00 },
      { id: 12, nome: 'Coca Cola', descricao: '600 ml', preco: 5.00 },
      { id: 13, nome: 'Coca Cola', descricao: '2 litros', preco: 9.00 }
    ];
    return {produtos};
  }
}

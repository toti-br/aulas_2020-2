import { Component, OnInit } from '@angular/core';
import { AnoService } from '../services/ano.service';
import { ProdutosService } from '../services/produtos.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  nome_modulo: string = 'Produtos';
  ano: number;
  produtos: any;

  constructor(aS: AnoService, produtos: ProdutosService) {
    this.ano = aS.getAno();
    this.produtos = produtos.getProducts();
  }

  ngOnInit(): void {
  }

}

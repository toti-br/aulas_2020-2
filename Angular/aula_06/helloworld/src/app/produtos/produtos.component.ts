import { Component, OnInit } from '@angular/core';
import { AnoService } from '../services/ano.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  nome_modulo: string = 'Produtos';
  ano: number;

  constructor(aS: AnoService) {
    this.ano = aS.getAno();
  }

  ngOnInit(): void {
  }

}

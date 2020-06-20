import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutosComponent } from './produtos.component';


@NgModule({
  declarations: [ProdutosComponent],
  imports: [
    CommonModule,
  ],
  exports: [
    ProdutosComponent
  ]
})
export class ProdutosModule { }

import { Component } from '@angular/core';
import { EnderecoService } from './endereco.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  endereco: any = {};
  tem_endereco: boolean = false;

  constructor(private endServ: EnderecoService) {
    this.tem_endereco = false;
  }

  onSubmit(formulario) {
    if(formulario.form.status == 'INVALID') {
      alert('Formulário inválido! Os dados estão incorretos!');
      return;
    }
    
      this.endServ.getEndereco(formulario.form.value.zipcode).subscribe(endereco => {
        this.endereco = endereco;
        this.tem_endereco = true;
        console.log(this.endereco);
      });
    
      
    console.log(formulario.form.value);
  }

  limpar() {
    this.endereco = {};
    this.tem_endereco = false;
  }
}

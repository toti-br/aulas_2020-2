import { Component } from '@angular/core';
import { EnderecoService } from './endereco.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  endereco: any = {};

  constructor(private endServ: EnderecoService) {
    console.log(this.endereco.length)
  }

  onSubmit(formulario) {
    if(formulario.form.status == 'INVALID')
      alert('Formulário inválido! Os dados estão incorretos!');
    
    // this.endServ.getEndereco(formulario.form.value.zipcode).subscribe(endereco => this.endereco = endereco);
    
      
    console.log(formulario.form.value);
  }
}

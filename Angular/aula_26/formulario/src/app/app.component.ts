import { Component } from '@angular/core';
import { UsuarioService } from './usuario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  usuario: any = {};

  constructor(private usuService: UsuarioService) {
    // usuService.getUsuario().subscribe(usuario => this.usuario = usuario);
  }

  onSubmit(formulario) {
    if(formulario.form.status == 'INVALID')
      alert('Formulário inválido! Os dados estão incorretos!');
    
    
    this.usuService.postUsuario(formulario.form.value)
    .subscribe(resposta => {
      console.log(resposta);
      alert('Dados enviados com sucesso!');
    });
      
    // console.log(formulario.form.value);
  }
}

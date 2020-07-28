import { Component } from '@angular/core';
import { UsuarioService } from './usuario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  usuario: any = {};

  constructor(usuServ: UsuarioService) {
    
    usuServ.getUsuario().subscribe(usuario => this.usuario = usuario);
  }

  onSubmit(formulario) {
    console.log(formulario.form.value);
  }
}
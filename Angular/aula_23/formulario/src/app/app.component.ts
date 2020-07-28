import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  usuario: any = {
    email: 'leonardo@toti.com',
    senha: '12345'
  };

  onSubmit(formulario) {
    console.log(formulario.form.value);
  }
}

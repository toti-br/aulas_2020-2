import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngstyle',
  templateUrl: './ngstyle.component.html',
  styleUrls: ['./ngstyle.component.css']
})
export class NgstyleComponent implements OnInit {

  meu_favorito: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.meu_favorito = !this.meu_favorito;
  }

}

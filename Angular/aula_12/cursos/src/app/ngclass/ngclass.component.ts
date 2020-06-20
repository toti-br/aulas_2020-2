import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngclass',
  templateUrl: './ngclass.component.html',
  styleUrls: ['./ngclass.component.css']
})
export class NgclassComponent implements OnInit {

  meu_favorito: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.meu_favorito = !this.meu_favorito;
  }
}

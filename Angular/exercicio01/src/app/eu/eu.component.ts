import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eu',
  templateUrl: './eu.component.html',
  styleUrls: ['./eu.component.css']
})
export class EuComponent implements OnInit {

  constructor() { }
  nome: string = 'Leonardo';
  idade: number = 24;
  gosta_de: string = 'Café, chocolate e star wars';
  cidade: string = 'Nova Friburgo';
  foto: string = 'assets/leo.JPG';

  ngOnInit(): void {
  }

}

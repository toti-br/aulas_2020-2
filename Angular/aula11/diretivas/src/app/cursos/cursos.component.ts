import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  cursos: any = [
    "Curso de Angular",
  	"Curso de JavaScript",
  	"Curso de Git",
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

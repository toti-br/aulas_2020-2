import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonagensService } from '../../services/personagens.service';

@Component({
  selector: 'app-personagem',
  templateUrl: './personagem.component.html',
  styleUrls: ['./personagem.component.css']
})
export class PersonagemComponent implements OnInit {

  constructor(private route: ActivatedRoute, private personagensServ: PersonagensService) { }
  id: number;
  personagem: any;

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      this.id = params['id'];

      this.personagensServ.getPersonagem(this.id).subscribe(personagem => {
        console.log(personagem);
        this.personagem = personagem;
      });
    });
  }
}
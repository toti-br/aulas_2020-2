import { Injectable, createPlatform } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EnderecoService {

  constructor(private http: HttpClient) { }

  getEndereco(cep) {
    return this.http.get('https://viacep.com.br/ws/'+cep+'/json/');
  }
}
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlanetasService {

//   planetas: any = [{
// 		"name": "Yavin IV",
// 		"rotation_period": "24",
// 		"orbital_period": "4818",
// 		"diameter": "10200",
// 		"climate": "temperate, tropical",
// 		"gravity": "1 standard",
// 		"terrain": "jungle, rainforests",
// 		"surface_water": "8",
// 		"population": "1000",
// 		"created": "2014-12-10T11:37:19.144000Z",
// 		"edited": "2014-12-20T20:58:18.421000Z",
// 	},
// 	{
// 		"name": "Tatooine",
// 		"rotation_period": "23",
// 		"orbital_period": "304",
// 		"diameter": "10465",
// 		"climate": "arid",
// 		"gravity": "1 standard",
// 		"terrain": "desert",
// 		"surface_water": "1",
// 		"population": "200000",
// 		"created": "2014-12-09T13:50:49.641000Z",
// 		"edited": "2014-12-20T20:58:18.411000Z",
// 	}];

  constructor(private http: HttpClient) { }

  getTodos() {
    return this.http.get('https://swapi.dev/api/planets/')
  }
}

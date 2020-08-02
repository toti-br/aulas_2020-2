import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  constructor(private http: HttpClient) { }

  private api_key = 'tdPvAGDGFpN6JDD3qnOsNvdn3SkYALNf';
  private limit = '24';
  private url = 'https://api.giphy.com/v1/gifs/search';
	
  getGifs(q) {
  	let url = `${this.url}?api_key=${this.api_key}&q=${q}&limit=${this.limit}`;
  	console.log(url);
  	
  	return this.http.get(url);
  }
}

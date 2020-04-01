import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'


export enum SearchType{
  all = '',
  series = 'series',
  movie = 'movie',
  episode = 'episode'
}

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  url = 'http://www.omdbapi.com/';
  apiKey = 'a8be873a';

  constructor(private http: HttpClient) { }

  searchData(title: string, type: SearchType): Observable<any> {
    // return this.http.get('http://www.omdbapi.com/?t=movie&y=2020&apikey=a8be873a').pipe
   return this.http.get(this.url+"?s="+title+"&type="+type+"&apikey="+this.apiKey).pipe
    (map(results => {
      console.log('results --->',results);
      return results['Search'];
    })
  );
  }

  getdetails(id){
    return this.http.get(this.url+"?i="+id+"&plot=full&apikey="+this.apiKey)
  }
}

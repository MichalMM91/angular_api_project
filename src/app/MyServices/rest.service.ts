import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
// dekorator, wstrzyknięcie zależności
export class RestService {

  constructor(private http:HttpClient ) { }

  public getJson(url:string):Observable<any>{
    return this.http.get(url);
    // wzorzec obserwatora
  }


}
//kursy walut, pogoda, kraje, giełda - różne rest api

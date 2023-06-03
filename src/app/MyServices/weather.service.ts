import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
// dekorator, wstrzyknięcie zależności
export class MyDataService {

  constructor(private http: HttpClient ) {

   }

   getData(url:string){
    return this.http.get(url)
    
   }


  // public getJson(url:string):Observable<any>{
  //   return this.http.get(url);
  //   // wzorzec obserwatora
  }


//}
//kursy walut, pogoda, kraje, giełda - różne rest api

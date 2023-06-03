import { Component, OnInit } from '@angular/core';
import { Country } from 'src/app/MyClasses/country';
import { RestService } from 'src/app/MyServices/rest.service';

import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-weatherinfo',
  templateUrl: './weatherinfo.component.html',
  styleUrls: ['./weatherinfo.component.css'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({backgroundColor: 'white', opacity: 0}),
        animate(2000,  style({backgroundColor: 'white', opacity: 1}))
      ])
    
  ])]
})
export class WeatherinfoComponent implements OnInit {
  
  countries = new Array<Country>()
  
  constructor(private restService:RestService){

  }
  ngOnInit(): void {
    this.getCountries();
  }

  getCountries(){
    this.restService.getJson('https://restcountries.com/v3.1/all').subscribe((data)=>{
      data.map((x:any)=>{
        const c = new Country()
        
        c.name=x.name.common
        if(x.capital==null)
          return;

        c.capital = x.capital[0]
        c.flag= x.flags.svg

        this.countries.push(c)

        
    });
    
  });
}
}

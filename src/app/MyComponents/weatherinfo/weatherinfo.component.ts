import { Component, OnInit } from '@angular/core';
import { Country } from 'src/app/MyClasses/country';
import { RestService } from 'src/app/MyServices/rest.service';

@Component({
  selector: 'app-weatherinfo',
  templateUrl: './weatherinfo.component.html',
  styleUrls: ['./weatherinfo.component.css']
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

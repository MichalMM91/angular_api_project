import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/MyServices/weather.service';
import { Weather } from 'src/app/MyClasses/weather';

@Component({
  selector: 'app-currentweather',
  templateUrl: './currentweather.component.html',
  styleUrls: ['./currentweather.component.css']
})
export class CurrentweatherComponent implements OnInit {
  
  weather = new Array<Weather>()
  
  constructor(private weatherService:WeatherService){

  }
  
 
  
  ngOnInit(): void {
   
   /* this.getWeather(this.searchQuery); */
  }

  searchQuery: string = 'London';


  onSubmit() {
/*     this.getWeather(this.searchQuery);
    this.searchQuery = ''; */
  }
  
  getWeather(){
    this.weatherService.getJson('http://api.weatherapi.com/v1/forecast.json?key=abacc8fa4ca44710b7d180424231405&q=London&days=1&aqi=no&alerts=no').subscribe((data)=>{
      data.map((x:any)=>{
        const w = new Weather()
        
        w.name = x.location.name
        w.temp_c = x.current.temp_c
        w.maxtemp_c = x.forecast.forecastday.day.maxtemp_c
        w.mintemp_c = x.forecast.forecastday.day.mintemp_c
        w.wind_kph = x.current.wind_kph
        w.humidity = x.current.humidity

        this.weather.push(w)

    });
    
  });
}
}

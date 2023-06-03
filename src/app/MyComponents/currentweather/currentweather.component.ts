import { Component, OnInit } from '@angular/core';
import { MyDataService } from 'src/app/MyServices/weather.service';
import { Weather } from 'src/app/MyClasses/weather';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-currentweather',
  templateUrl: './currentweather.component.html',
  styleUrls: ['./currentweather.component.css'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({backgroundColor: 'white', opacity: 0}),
        animate(2000,  style({backgroundColor: 'white', opacity: 1}))
      ])
    
  ])]
})

export class CurrentweatherComponent implements OnInit {
  myData: any;
  
  searchQuery='London'
  constructor(private myDataService: MyDataService) {}
  
  ngOnInit(): void {
      this.myDataService.getData('https://api.weatherapi.com/v1/forecast.json?key=abacc8fa4ca44710b7d180424231405&q='+this.searchQuery+'&days=1&aqi=no&alerts=no').subscribe((data) =>{
      this.myData = data;
        
    }
    );
  }

  onSubmit() {
    // this.myDataService.getData(this.searchQuery);
    this.getWeather(this.searchQuery);
    console.log(this.myData.current.temp_c)
        }
  getWeather(searchQuery: string){
    this.myDataService.getData('https://api.weatherapi.com/v1/forecast.json?key=abacc8fa4ca44710b7d180424231405&q='+this.searchQuery+'&days=1&aqi=no&alerts=no').subscribe((data) =>{
      this.myData = data;
      // console.log(this.myData.location.name)
      if(this.myData.location.name==null)
          return;
  })

  }

} 


//   weather = new Array<Weather>()
  
//   constructor(private weatherService:WeatherService){
  
//   }
  
//   ngOnInit(): void {
//     this.getWeather();    
//     // this.getWeather(this.searchQuery);
//   }
  

//     searchQuery: string = 'London';

//    onSubmit() {
//   //   // this.getWeather(this.searchQuery);
//   //  //this.getWeather();
//    }
//   getWeather(){  
//   // getWeather(searchQuery: string){
//     //  this.weatherService.getJson('http://api.weatherapi.com/v1/forecast.json?key=abacc8fa4ca44710b7d180424231405&q='+searchQuery+'&days=1&aqi=no&alerts=no').subscribe((data)=>{
//       this.weatherService.getJson('https://api.weatherapi.com/v1/forecast.json?key=abacc8fa4ca44710b7d180424231405&q=Paris&days=1&aqi=no&alerts=no').subscribe((data)=>{
//     console.log(data);
     
//      //this.weatherService.getJson(searchQuery).subscribe((data)=>{ 
//     data.map((y:any)=>{
//         const w = new Weather()
        
//         w.name = y.location.name
//         // w.temp_c = x.current.temp_c
//         // w.maxtemp_c = x.forecast.forecastday.day.maxtemp_c
//         // w.mintemp_c = x.forecast.forecastday.day.mintemp_c
//         // w.wind_kph = x.current.wind_kph
//         // w.humidity = x.current.humidity

//          this.weather.push(w)
        
//     });
    
//   });
// }
// }

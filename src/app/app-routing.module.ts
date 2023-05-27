import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './MyComponents/home/home.component';
import { WeatherinfoComponent } from './MyComponents/weatherinfo/weatherinfo.component';
import { CurrentweatherComponent } from './MyComponents/currentweather/currentweather.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'places', component: WeatherinfoComponent},
  {path: 'currentWeather', component: CurrentweatherComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

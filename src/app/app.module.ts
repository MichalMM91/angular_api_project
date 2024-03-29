import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './MyComponents/main/main.component';
import { HomeComponent } from './MyComponents/home/home.component';
import { WeatherinfoComponent } from './MyComponents/weatherinfo/weatherinfo.component';
//te 2 ponizej bardzo istotne i latwo zapomniec
import { FormsModule } from '@angular/forms';

import {HttpClientModule} from '@angular/common/http';

import { CurrentweatherComponent } from './MyComponents/currentweather/currentweather.component';
import { AboutComponent } from './MyComponents/about/about.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './MyComponents/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HomeComponent,
    WeatherinfoComponent,
    CurrentweatherComponent,
    AboutComponent,
    FooterComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

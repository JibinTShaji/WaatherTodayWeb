import { Component } from '@angular/core';
import { WeatherService } from '../weather.service';
import { NgIf } from '@angular/common';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [NgIf, FormsModule],
  templateUrl: './weatherweb.component.html',
  styleUrl: './weatherweb.component.css'
})
export class WeatherwebComponent {
  city!: string
  weatherData: any
  weather: any
  visibility:number | undefined
  wind_speed:any 
  lat:any
  lon:any
  weatherdescription:string | undefined
  temperature: number | undefined;
  Feels_like: number | undefined;
  constructor(private weatherService: WeatherService) { }
  ngOnInit() { }


  getWeather() {
    this.weatherService.getWeather(this.city).subscribe(data => {
      this.weatherData=data
      this.temperature=Math.round(this.weatherData.main.temp)
      this.Feels_like=Math.round(this.weatherData.main.feels_like)

      //this if condition is used for weather description.

      if (this.weatherData && this.weatherData.weather && this.weatherData.weather.length > 0) {
        this.weatherdescription = this.weatherData.weather[0].description;
      }
      
      console.log(data);
    })

  }
  

  getLatLon(lat: any, lon: any) {
    this.weatherService.getLatLon(this.lat,this.lon).subscribe(data => {
      this.weatherData = data
      console.log(data);

    })

  }



}

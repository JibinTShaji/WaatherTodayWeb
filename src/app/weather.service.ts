import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  apiKey="aee83d97b80833744ed22698eb7f3705"
  baseurl="https://api.openweathermap.org/data/2.5"
  constructor(private http:HttpClient) { }
  getWeather(city:string){
return this.http.get(`${this.baseurl}/weather?units=metric&q=${city}&appid=${this.apiKey}`)
  }

  getLatLon(lat:string,lon:string){
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=${this.apiKey}`)
      } 
}

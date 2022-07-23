import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Models/Class/User';
import { UserService } from 'src/app/Services/user.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.css']
})
export class WeatherWidgetComponent implements OnInit {

  weatherData: any;
  urlWeather: string;
  user: User;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.urlWeather = '';
    if (this.userService.User) {
      this.user = this.userService.User
      this.urlWeather = environment.weather + this.user.ciudad + '&appid=' + environment.keyWeather;
      console.log(this.urlWeather);
    }

    this.getWeatherData();
  }

  getWeatherData() {
    if (this.urlWeather != '') {
      fetch(this.urlWeather)
      .then(response => response.json())
      .then(data => {
        this.setWeatherData(data);
      });
    }
  }

  setWeatherData(data: any) {
    this.weatherData = data;
    let sunsetTime = new Date(this.weatherData.sys.sunset * 1000);
    this.weatherData.sunset_time = sunsetTime.toLocaleTimeString();
    let currentDate = new Date();
    this.weatherData.isDay = (currentDate.getTime() < sunsetTime.getTime());
    this.weatherData.temp_celcius = (this.weatherData.main.temp - 273.15).toFixed(0);
    this.weatherData.temp_min = (this.weatherData.main.temp_min - 273.15).toFixed(0);
    this.weatherData.temp_max = (this.weatherData.main.temp_max - 273.15).toFixed(0);
    this.weatherData.temp_feels_like = (this.weatherData.main.feels_like - 273.15).toFixed(0);
  }

}

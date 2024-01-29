import { Component } from '@angular/core';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import { faFaceSmile } from '@fortawesome/free-solid-svg-icons';
import { faFaceFrown } from '@fortawesome/free-solid-svg-icons';
import { WeatherService } from '../Service/weather.service';

@Component({
  selector: 'app-right-container',
  templateUrl: './right-container.component.html',
  styleUrls: ['./right-container.component.css']
})
export class RightContainerComponent {

constructor(public weatherService:WeatherService) {

}

// Fa icon forthumbs up/down and smile/from Icons and install pkg cnd fontawesome icons
faThumbsUp:any=faThumbsUp;
faThumbsDown:any=faThumbsDown;
faFaceSmile:any=faFaceSmile;
faFaceFrown:any=faFaceFrown;


// function to control tab values or tab states
// function for click of tab Today
onTodayClick(){
  this.weatherService.today=true;
  this.weatherService.week=false;
}
// function for click of tab week
onWeekClick(){
  this.weatherService.week=true;
  this.weatherService.today=false;
}

// function to control metric values or tab states
// function for click of metric celsius
oncelsiusClick(){
  this.weatherService.celsius=true;
  this.weatherService.fahrenheit=false;
}

// function for click of metric fahrenheit
onfahrenheitClick(){
  this.weatherService.fahrenheit=true;
  this.weatherService.celsius=false;
}

}


import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'countdown';
  angFrom: FormGroup
  days:any
  hours:any
  seconds:any
  constructor(private formBuilder: FormBuilder) {
    this.createangFrom();
  }

  createangFrom() {
    this.angFrom = this.formBuilder.group({
      count: ['']
    });
  }

  onSubmit() {
    console.log(this.angFrom.value)
    var data = this.angFrom.value
    var date = data.count.getTime();
    console.log(date)
    var x = setInterval(function () {
      var now = new Date().getTime();
      // console.log(new Date())
      var distance = date - now;
      // console.log(distance)
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      document.getElementById("demo").innerHTML = days + "d " + hours + "h "
      + minutes + "m " + seconds + "s ";
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "HAPPY";
      }
    })

  }

}

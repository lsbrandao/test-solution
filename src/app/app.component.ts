import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  sortingForm = new FormGroup({
    input: new FormControl('', Validators.required)
  })
  myArr;

  constructor(private appService: AppService) {}

  ngOnInit() {
    this.appService.arrToSort.subscribe(
      (data) => this.myArr = data
    )
  }

  onSubmit() {
    const receivedInput = this.sortingForm.value.input;
    this.myArr = receivedInput.replace(/\s/g, "").split(',').map((item) => {
      return parseInt(item, 10);
    });
    console.log(this.myArr);
    this.appService.sendArray(this.myArr);
  }

  applyStyles(item) {
    const styles = {
      'backgroundColor' : 'lightblue',
      'width' : `${item}%`
    };
    return styles;
}
}

import { S } from '@angular/cdk/keycodes';
import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
})
export class UserComponent implements OnInit {
  selectedDate: Date;
  boh = new FormGroup({
    beh: new FormControl(''),
    bah: new FormControl(''),
    buh: new FormControl(new Date()),
  });

  constructor(public datePipe: DatePipe) {}
  ngOnInit(): void {
    this.boh.valueChanges.subscribe((value) => {
      this.selectedDate = value.buh;
    });
  }
  calcolagiorno() {
    
    let correctDate = this.datePipe.transform(this.selectedDate);
    console.log(this.datePipe.transform(this.selectedDate, 'dd-MM-yyyy'));
  }
}

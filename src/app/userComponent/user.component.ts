import { S } from '@angular/cdk/keycodes';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls:['./user.component.css',],
})
export class UserComponent implements OnInit {
  selectedDate: Date;
  appear:boolean=false;
  editForm = new FormGroup({
    timeStart: new FormControl(''),
    timeEnd: new FormControl(''),
    dateInput: new FormControl(new Date()),
  });

  constructor(public datePipe: DatePipe, private formBuilder: FormBuilder, private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
    ]).subscribe(
      value => {
        console.log(value.breakpoints);
        if (this.breakpointObserver.isMatched(Breakpoints.XSmall))//controlli brakpoint con l'observer  con .isMatched(Breakpoints.XSmall) sono dentro un determinato brakpoint
        {
          //// TEST console.log("ok")
          this.appear = false;
        }

        if (this.breakpointObserver.isMatched(Breakpoints.Small)) {
          //// TEST console.warn("ok")
          this.appear = false;
        }

        if (this.breakpointObserver.isMatched(Breakpoints.Medium)) {
            ////  TEST console.error("ok")
            this.appear = true;
        }

        
      })
  }
  
  ngOnInit(): void {
    this.editForm.valueChanges.subscribe((value) => {
      this.selectedDate = value.dateInput;
    });
  }
  calcolagiorno() {
    let correctDate = this.datePipe.transform(this.selectedDate);
    console.log(this.datePipe.transform(this.selectedDate, 'dd-MM-yyyy'));
  }
}

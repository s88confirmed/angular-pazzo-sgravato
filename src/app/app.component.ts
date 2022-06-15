import { Dialog, DialogRef } from '@angular/cdk/dialog';
import { Component, VERSION } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserComponent } from './userComponent/user.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(
    public dialog: MatDialog /*instanzio nel costruttore Dialo per poi poterlo usare nel metodo sottostante */
  ) {}

  name = 'Angular ' + VERSION.major;
  /*metodo per  */
  openDialog(/*parametri sno i tempi */) {
    let dialogRef = this.dialog.open(UserComponent, {
      width:'50vw',
      height:'50vh',
    });
  }
  closeDialog() {
    
  }
}

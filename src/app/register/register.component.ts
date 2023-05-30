import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

acno1:any
uname1:any
psw1:any
cpsw1:any

  register1(){
    console.log(this.acno1);
    console.log(this.uname1);
    console.log(this.psw1);
    console.log(this.cpsw1);

    

  }

}

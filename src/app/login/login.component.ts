import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  data="Happy Banking With Us"
  pdata="Enter Account Number"

  servicedata:any

constructor(private rout:Router,private dservice:ServiceService){}



ngOnInit(): void{
  this.servicedata=this.dservice.sdata
  console.log(this.servicedata);
  this.dservice.smethod()
  


}

  login(a:any){

// console.log(a.value);
// alert('ligin clicked')
this.rout.navigateByUrl('home')
  }

acnochange(event:any){
  console.log(event.target.value);
  
}

}

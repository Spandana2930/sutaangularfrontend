import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   userName=""
   password=""
storeuserName(event:any,type:any){
  
  if(type=="username"){
   this.userName = event.target.value 
  }
  if(type=="password"){ 
    this.password = event.target.value
  }
   console.log(this.userName,this.password)
}

  submit=()=>{

  }

  constructor() { }

  ngOnInit(): void {
  }

}

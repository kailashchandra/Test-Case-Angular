import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {Router, NavigationExtras, ActivatedRoute} from "@angular/router";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username : string;
  password : string;
  loginForm :FormGroup;
  
  constructor(private http : HttpClient, private router : Router, private route : ActivatedRoute) { 
    this.loginForm = new FormGroup({
      username: new FormControl(),
      password: new FormControl()
   });
  }

  
  ngOnInit(): void {
    this.username = 'Admin';
    this.password = 'Admin';
    
  }
   
  loginUser() : void{
    this.http.post('/api/login', {username : this.username, password : this.password}).subscribe(res => {
      console.log(res); 
      this.router.navigate(['dashboard']);
    });
  }

  resetForm() : void{
    this.username = "";
    this.password = "";
  }
}

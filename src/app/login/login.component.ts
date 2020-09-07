import { Component, OnInit } from '@angular/core';
import {User} from './User';
import { Router } from '@angular/router';
import { AuthGuard } from '../auth.guard';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit 
{
  constructor(private router:Router, private auth:AuthGuard ) {}
  
  ngOnInit(): void {}
  
  users:Array<User> = 
  [
    {'username':"admin", 'password':"6627 56837 74355"},
    {'username':"6627", 'password':"shell"},
    {'username':"root", 'password':"toor"}
  ];
  user:User = new User();
  signup()
  {
    this.users.forEach(u =>
    {
        if (u.username==this.user.username)
        {
          alert(u.username+" already exists ");
          throw new Error(u.username+" already exists ");
        }
    })
      console.log("outside foreach")
      this.users.push(this.user);
      console.log(this.users);
  }

  deleteUser()
  {
    console.log(this.users);
    this.users=this.users.filter
    (
      user => user.username!=this.user.username
    );
    console.log(this.users);
  }

  invalidLogin=false;
  login()
  {
    console.log(this.user);
    console.log(this.users.includes(this.user)) //doesn't work when comparing objects
    let success=this.users.filter
    (
        u =>
        u.username==this.user.username &&
        u.password==this.user.password
    ).length == 1;
    
    if (success)
    {
      this.auth.loggedInUser=this.user.username;
      this.router.navigate(['laptop']);
      console.log("successfully logged in");
    }
    else
    {
      this.invalidLogin = true;
      console.log("invalid cradentials");
    }
  }
}



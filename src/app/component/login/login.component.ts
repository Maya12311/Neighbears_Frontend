import { LoginService } from '../../services/login.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { compileNgModule } from '@angular/compiler';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  authStatus: string = "";
  model = new User;

  constructor(private loginService: LoginService, private router: Router ){}


  ngOnInit(): void {

  }

  validateUser(loginForm: NgForm){
    console.log("hey")

    this.loginService.validateLoginDetails(this.model).subscribe(
      responseData => {
console.log("this is the response ", responseData)
        this.model = <any> responseData.body;
        this.model.authStatus = 'AUTH';

        console.log("in component")
        window.sessionStorage.setItem("userdetails", JSON.stringify(this.model));


       this.router.navigate(['profile']);
      }
    )
  }
}



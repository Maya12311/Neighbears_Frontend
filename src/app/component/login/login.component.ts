import { LoginService } from '../../services/login.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { compileNgModule } from '@angular/compiler';
import { getCookie } from 'typescript-cookie' // Pfad anpassen
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
    this.loginService.validateLoginDetails(this.model).subscribe(
      responseData => {
        this.model = <any> responseData.body;
        this.model.authStatus = 'AUTH';
        window.sessionStorage.setItem("userdetails", JSON.stringify(this.model));
        let xsrf = getCookie("XSRF-TOKEN")!;
        window.sessionStorage.setItem("XSRF-TOKEN", xsrf);

       this.router.navigate(['profile']);
      }
    )
  }
}



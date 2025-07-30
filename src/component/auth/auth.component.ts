import { AuthService } from './auth.service';
import { compileNgModule } from "@angular/compiler";
import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: './auth.component.html',
  templateUrl: './auth.component.html'
})
export class AuthComponent{
  isLoginMode = true;

  constructor(private authService: AuthService){}

  onSwitchMode(){
    this.isLoginMode = !this.isLoginMode
  }

  onSubmit(form: NgForm){
    if(!form.valid){
      return
    }
    const email = form.value.email;
    const pwd = form.value.password;
    console.log(email + pwd)

    console.log("bluuu")
    this.authService.signup(email, pwd).subscribe(resData =>{
      console.log(resData);

    }, error => {
      console.log(error);
    }
    );

    form.reset();
  }
}

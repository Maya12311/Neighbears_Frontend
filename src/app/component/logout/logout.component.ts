import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../model/user';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})

  export class LogoutComponent implements OnInit {
    wavingPic='../../../assets/girlWavingPOC.png'
    matureWomen= '../../assets/matureWomenWaving.png'
    user = new User();
    constructor(private router : Router, private login: LoginService) {

    }

    ngOnInit(): void {
      window.sessionStorage.setItem("userdetails","");
      //window.sessionStorage.setItem("XSRF-TOKEN","");
    //  this.router.navigate(['/login']);
    }

    logout(){
     //window.sessionStorage.setItem("userdetails","");
      //window.sessionStorage.setItem("XSRF-TOKEN","");
      //document.cookie = "XSRF-TOKEN=; path=/; max-age=0";
      this.login.logout().subscribe(
        next => {
          console.log('logout worked', next);
          
        },
        error => {
          console.error('an error occured', error);
        }

      )
      this.router.navigate(['/login']);



    }


}

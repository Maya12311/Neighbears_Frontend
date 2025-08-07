import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../model/user';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})

  export class LogoutComponent implements OnInit {

    user = new User();
    constructor(private router : Router) {

    }

    ngOnInit(): void {
      window.sessionStorage.setItem("userdetails","");
      //window.sessionStorage.setItem("XSRF-TOKEN","");
      this.router.navigate(['/login']);
    }


}

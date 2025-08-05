import { SelfDescripton } from './../../../model/selfDescription';
import { Component, OnInit } from '@angular/core';
import { User } from '../../../model/user';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ProfileService } from '../../../services/profile.service';
import { getCookie } from 'typescript-cookie';

@Component({
  selector: 'app-self-description',
  templateUrl: './self-description.component.html',
  styleUrl: './self-description.component.css'
})
export class SelfDescriptionComponent implements OnInit{


  selfDescription = new SelfDescripton();
  constructor(private router : Router, private profileService: ProfileService) {

  }

  ngOnInit(): void {
    console.log(getCookie("XSRF-TOKEN"), "lets see what to see");

   // this.router.navigate(['/login']);
  }

  saveSelfDescripton(loginForm: NgForm){

    console.log("bluuu mama")
    console.log("from self desc"+window.sessionStorage.getItem);
    console.log(window.sessionStorage.getItem("XSRF-TOKEN"))

    this.profileService.saveSelfDescription(this.selfDescription).subscribe(
      responseData => {
        this.selfDescription = <any> responseData.body;
        //window.sessionStorage.setItem("userdetails", JSON.stringify(this.selfDescripton));

       // let xsrf = getCookie("XSRF-Token")!;
       // window.sessionStorage.setItem("XSRF-Token", xsrf);
    }, error => {
      console.log(error)
      console.error("not worki")
    });

    loginForm.reset();
  }

  }



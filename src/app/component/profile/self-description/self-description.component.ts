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

  wannaChangeDescription: boolean = false;
  profileIsFilledOut: boolean = false;
  selfDescription = new SelfDescripton();
  constructor(private router : Router, private profileService: ProfileService) {

  }

  ngOnInit(): void {
    let xsrf = sessionStorage.getItem("XSRF-TOKEN");
    this.loadDescription();
    this.selfDescription != null?this.profileIsFilledOut= true: this.profileIsFilledOut = false;
    console.log("is this profile filled out? ", this.profileIsFilledOut);
    console.log("wanna change description? ", this.wannaChangeDescription);

   // this.router.navigate(['/login']);
  }

  goToFillOutForm(){
    this.wannaChangeDescription = true;
    this.profileIsFilledOut = false;
    console.log("2is this profile filled out? ", this.profileIsFilledOut);
    console.log("2wanna change description? ", this.wannaChangeDescription);
  }

  changeDescription(loginForm: NgForm){

    this.profileService.changeDescription(this.selfDescription).subscribe(
      responseData => {
        this.selfDescription = <any> responseData.body;
        this.profileIsFilledOut=true;
        this.wannaChangeDescription= false; 
    },
    error => {

    });


  }


  loadDescription(){
    this.profileService.loadDescription().subscribe(response => {
      this.selfDescription = response.body!;
    },
    error => {
      console.error('Fehler beim Laden der SelfDescription:', error);
      // hier kannst du z.B. eine Fehlermeldung anzeigen
    }
    )
  }

  saveSelfDescripton(loginForm: NgForm){

    this.profileService.saveSelfDescription(this.selfDescription).subscribe(
      responseData => {
        this.selfDescription = <any> responseData.body;
        //window.sessionStorage.setItem("userdetails", JSON.stringify(this.selfDescripton));

       // let xsrf = getCookie("XSRF-Token")!;
       // window.sessionStorage.setItem("XSRF-Token", xsrf);
    }, error => {

    });

    loginForm.reset();
  }

  }



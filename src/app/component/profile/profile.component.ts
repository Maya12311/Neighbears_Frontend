import { Component, OnInit } from '@angular/core';
import { NeighbearsService } from '../../services/neighbears.service';
import { User } from '../../model/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
  neighbear : string= "";
  user = new User();


  constructor(private neiServ: NeighbearsService){}

  ngOnInit(): void {
    console.log("the user is ",this.user)
    //this.getNeighbearProfile();
   console.log("the user is ",this.user)

  //window.sessionStorage.getItem("XSRF-TOKEN");
 //   if(sessionStorage.getItem('userdetails')){
 //     this.user = JSON.parse(sessionStorage.getItem('userdetails') || "");
  }
}






  //public getNeighbearProfile(): void {
   // this.neiServ.getAllNeighbears().subscribe(
     // (response: string ) =>{
       // this.neighbear = response;
      //}
    //)
  //}


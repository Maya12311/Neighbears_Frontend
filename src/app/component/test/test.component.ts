import { User } from '../../model/user';
import { NeighbearsService } from './../../services/neighbears.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent implements OnInit{

   text: string ="";
   user= new User();
  constructor(private neighbearsService:NeighbearsService){

  }

ngOnInit(): void {
  this.test();
}

  test(){
    this.user = JSON.parse(sessionStorage.getItem('userdetails')!);
    if(this.user){
    this.neighbearsService.getTest(this.user.id).subscribe(responseData => {
      this.text = <any> responseData;
    }, error => {
      console.log(error)
      console.error("in test")
    });
  }

  }}


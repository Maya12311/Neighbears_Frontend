import { Component, OnInit } from '@angular/core';
import { NeighbearsService } from '../../services/neighbears.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
  neighbear : string= "";
  constructor(private neiServ: NeighbearsService){}

  ngOnInit(): void {
    this.getNeighbearProfile();
  }

  public getNeighbearProfile(): void {
    this.neiServ.getAllNeighbears().subscribe(
      (response: string ) =>{
        this.neighbear = response;
      }
    )
  }

}

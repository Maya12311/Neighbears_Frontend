import { Neighbear } from '../../model/neighbear';
import { NeighbearsService } from './../../services/neighbears.service';
import { Component, OnInit } from '@angular/core';
{Neighbear}

@Component({
  selector: 'app-see-all-neighbears',
  templateUrl: './see-all-neighbears.component.html',
  styleUrl: './see-all-neighbears.component.css'
})
export class SeeAllNeighbearsComponent implements OnInit{

  neighbearsList: Neighbear[] = [];
constructor(private neighbearService: NeighbearsService ){}

  ngOnInit(): void {
    this.seeYourNeighbears();

  }


  seeYourNeighbears() {
this.neighbearService.getAllNeighbears().subscribe({
  next: (list: Neighbear[]) => {
    this.neighbearsList= list;
  },
  error: (err: unknown) => {
    console.error('Fehler beim Laden der Nachbarn', err);
    this.neighbearsList = [];
  }
}

)
}


  }





import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { environment } from '../../../environments/environment';
import { Neighbear } from '../../model/neighbear';
import { ProfileService } from '../../services/profile.service';
import { NeighbearsService } from './../../services/neighbears.service';
import { Component, OnInit } from '@angular/core';
{Neighbear}

@Component({
  selector: 'app-see-all-neighbears',
  templateUrl: './see-all-neighbears.component.html',
  styleUrl: './see-all-neighbears.component.css'
})
export class SeeAllNeighbearsComponent implements OnInit{
public env = environment; 
  neighbearsList: Neighbear[] = [];
  safeImageUrls: { [key: number]: SafeUrl } = {}; // Map: ID → Bild-URL
  street: string = "" ; 
  houseNumber: string = "";

constructor(private neighbearService: NeighbearsService , private profileService : ProfileService,   private sanitizer: DomSanitizer               // ⬅️ hier rein
){}

  ngOnInit(): void {
    this.seeYourNeighbears();

  }



  loadAvatar(id: number) {
    this.neighbearService.getUserAvatar(id).subscribe({
      next: blob => {
        const objectURL = URL.createObjectURL(blob);
        this.safeImageUrls[id] = this.sanitizer.bypassSecurityTrustUrl(objectURL);
      },
      error: () => {
        console.log("problem while loading image")
        // Wenn Bild fehlt → Platzhalter
      }
    });
  }



  seeYourNeighbears() {
this.neighbearService.getAllNeighbears().subscribe({
  next: (list: Neighbear[]) => {
    this.neighbearsList= list;
    this.street = this.neighbearsList[0].addressDTO?.street || ""; 
    this.houseNumber = this.neighbearsList[0].addressDTO?.houseNumber || ""; 
    for(const element of this.neighbearsList){
console.log(element)
      if(element.avatar?.storageKey == ""){
continue
      }else{
        this.loadAvatar(element.id);

      }

          }
  },
  error: (err: unknown) => {
    console.error('Fehler beim Laden der Nachbarn', err);
    this.neighbearsList = [];
  }
}

)
}



  



  }





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

  neighbearsList: Neighbear[] = [];
  avatar: any = "";
  type : any = "";
  profileImageUrl="";
  profilePicExist=false;
  id :number = 0;
  //avatar: string = "";
constructor(private neighbearService: NeighbearsService , private profileService : ProfileService){}

  ngOnInit(): void {
    this.seeYourNeighbears();

  }


  seeYourNeighbears() {
this.neighbearService.getAllNeighbears().subscribe({
  next: (list: Neighbear[]) => {
    this.neighbearsList= list;
    console.log(this.neighbearsList)

    console.log(this.avatar)

    for(const element of this.neighbearsList){
      if(element.avatar?.storageKey == ""){
continue
      }else{
this.id = element.id
      }
            this.avatar = element.avatar?.storageKey;

          }
  },
  error: (err: unknown) => {
    console.error('Fehler beim Laden der Nachbarn', err);
    this.neighbearsList = [];
  }
}

)
}

getProfilePic(){
  this.profileService.getProfileImageWithId(this.id).subscribe(blob => {
    //console.log('blob url', blob);

    this.profileImageUrl = URL.createObjectURL(blob);
    console.log('blob url', this.profileImageUrl);
    this.profilePicExist=true;
  })}



  }





import { ProfileService } from './../../services/profile.service';
import { AuthGuard } from './../../routeguards/routeguard';
import { Component } from '@angular/core';
import { getCookie } from 'typescript-cookie';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrl: './image.component.css'
})
export class ImageComponent {

  constructor(private profileService: ProfileService){}

selectedFile: File | null = null;

  onFileSelected(event: Event): void{
    const input = event.target as HTMLInputElement;
    if(input.files && input.files.length > 0 ){
      this.selectedFile = input.files[0];
    }

  }

  onUpload( ):void{
    if(!this.selectedFile){
      console.log("Kein File ausgewählt");
return ;
}

//let xsrf = getCookie("XSRF-TOKEN")!;
//window.sessionStorage.setItem("X-XSRF-TOKEN", xsrf)


  this.profileService.uploadPic(this.selectedFile).subscribe({
    next: (response) => {
      console.log("Upload successful!", response);
    },
    error: (err) => {
      console.log("error within the upload", err);
    }
    });
  }

}

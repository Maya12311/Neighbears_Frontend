import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs';
import { getCookie } from 'typescript-cookie';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{

  allHeaders = ['Home', 'Add To Community Board', 'See All Neighbears', 'Message', 'Profile', 'Logout' , 'Test'];
  currentHeaders: any = [];
  pageTitle: string = '';
  currentUrl: string = '';
  isLoggedIn: string =  getCookie("XSRF-TOKEN")!;


  constructor(private router: Router, private route: ActivatedRoute) {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => {
          console.log(this.route);
          console.log(this.router);
          let child = this.route.firstChild;
          while (child?.firstChild) {
            child = child.firstChild;
          }
          return child?.snapshot.data['title'] || '';
        })
      )
      .subscribe(title => {
        this.pageTitle = title;
        this.currentUrl = this.router.url;


        //this.isLoggedIn = false;
       this.currentHeaders = [];
        console.log("pagetitle",this.pageTitle)
        this.allHeaders.forEach(one => one !== this.pageTitle?this.currentHeaders.push(one): console.log("blu"))  //!==this.pageTitle?this.allHeaders.push(one):console.log("kkkkjk"))


//this.allHeaders = this.allHeaders.filter(not => not !== this.pageTitle)
      });
  }

  ngOnInit(): void {

  }
}

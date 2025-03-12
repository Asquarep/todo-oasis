import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-menubar',
  // standalone: true,
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css'],
})
export class MenubarComponent {
  badgevisible = false;
  badgevisibility() {
    this.badgevisible = true;
  }

  pageTitle: string = '';
  noHeader = false;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd), // Listen for route changes
        map(() => {
          let child = this.activatedRoute.firstChild;
          while (child?.firstChild) {
            child = child.firstChild;
          }
          const noHeader: boolean = child?.snapshot.data['noHeader'] || false;
          const title: string = child?.snapshot.data['title'] || 'Default Title';

          return {noHeader, title};
        })
      )
      .subscribe(({title, noHeader}) => {
        this.pageTitle = title;
        this.noHeader = noHeader;

      });
  }


  goHome() { 
  }
}

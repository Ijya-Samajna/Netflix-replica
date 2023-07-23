import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnChanges {
  menuItems = [
    {
      name: 'Movies',
      icon: '../../../../assets/icons/movie_icon.svg',
      isActive: true,
      route: 'movies'
    }
  ];
  showSidebar: boolean = false;
  @Input() expandSidebar: boolean = false;

  constructor(
    private router: Router
  ) {

  }

  ngOnChanges(changes: SimpleChanges): void {
    this.showSidebar = this.expandSidebar;
  }

  setActive(active) {
    this.menuItems.forEach((item) => {
      if(active.name === item.name) {
        item.isActive = true;
      }
      else {
        item.isActive = false;
      }
    })
    this.router.navigate([active.route])
  }
}

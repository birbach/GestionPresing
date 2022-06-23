import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  public menus=[
    { title: 'PROFILE', url: '/menu/profile', icon: 'home' },
    { title: 'COLLECTION', url: '/menu/articles', icon: 'book' },
    { title: 'CONTACTER-NOUS', url: '/menu/contacte', icon: 'heart' },
    { title: 'LOG-OUT', url: '/menu/log-out', icon: 'heart' },
  ];
  constructor(private router: Router) { }

  ngOnInit() {
  }
  onMenuItem(value){
    this.router.navigateByUrl(value.url);
}

}

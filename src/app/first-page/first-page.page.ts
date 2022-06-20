import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.page.html',
  styleUrls: ['./first-page.page.scss'],
})
export class FirstPagePage implements OnInit {
  
  name ="My name is Taha Yacine"
  constructor() { }

  changename()
  {
    this.name = "this text is changed "
  }
  ngOnInit() {
  }

}

import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collect-livraison',
  templateUrl: './collect-livraison.page.html',
  styleUrls: ['./collect-livraison.page.scss'],
})
export class CollectLivraisonPage implements OnInit {

  // dateDisabled=formatDate(new Date(),)
  minDate: Date;
  constructor() { }

  ngOnInit() {
    this.minDate = new Date();
  }

  segmentChanged(event){

  }

  test(event){
    console.log(event.target.value);
  }

}





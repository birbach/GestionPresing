import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-collect-livraison',
  templateUrl: './collect-livraison.page.html',
  styleUrls: ['./collect-livraison.page.scss'],
})
export class CollectLivraisonPage implements OnInit {

  type = 'collecter';

  minDate: Date;

  clientDate: any;
  livreurDate: any;
  livreurTime: any;
  clientTime: any;

  isCollecter = true;
  isLivraison = false;

  collecterForm = this.fb.group({
    collectDate: [, Validators.required],
    collectTime: [, Validators.required],
    livreureDate: [, Validators.required],
    livreureTime: [, Validators.required],
    pay: [, Validators.required],

  });
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  collecter() {
    this.isCollecter = true;
    this.isLivraison = false;
  }

  livraison() {
    this.isCollecter = false;
    this.isLivraison = true;
  }

  keepDateCollecte(evn) {
    this.clientDate = evn.target.value;
  }

  keepTimeCollecte(evn) {
    this.clientTime = evn.target.value;

  }

  keepDateLivreure(env) {
    this.livreurDate = env.target.value;
  }

  keepTimeLivreure(env) {
    this.livreurTime = env.target.value;
  }


}

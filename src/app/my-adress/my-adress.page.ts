import { Component, OnInit } from '@angular/core';
import {marocVille} from '../../marocmap';

@Component({
  selector: 'app-my-adress',
  templateUrl: './my-adress.page.html',
  styleUrls: ['./my-adress.page.scss'],
})
export class MyAdressPage implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log(marocVille);
  }

}

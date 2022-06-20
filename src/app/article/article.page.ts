import { Component, OnInit } from '@angular/core';
import { Article } from './modules/article.modul';

@Component({
  selector: 'app-article',
  templateUrl: './article.page.html',
  styleUrls: ['./article.page.scss'],
})
export class ArticlePage implements OnInit {

  articlee: Article[] =  [
  ];

  constructor() { }

  ngOnInit() {
  }

}

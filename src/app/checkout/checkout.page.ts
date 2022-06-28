import { Component, OnInit } from '@angular/core';
import { Article } from '../article/modules/article.modul';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {
  listArticleSelectedLavage = this.articleService.listArticleSelectedLavage;
  listArticleSelectedPassage = this.articleService.listArticleSelectedPassage;
  listArticleSelectedLavagePassage = this.articleService.listArticleSelectedLavagePassage;

  prixLavage: number;
  prixPassage: number;
  prixLavagePassage: number;
  prixToal: number;
  constructor(private articleService: ArticleService) { }
  ngOnInit() {
    this.listArticleSelectedLavage.forEach(element => {
      this.prixLavage = element.prix;
    });

    this.listArticleSelectedPassage.forEach(element => {
      this.prixPassage = element.prix;
    });

    this.listArticleSelectedLavagePassage.forEach(element => {
      this.prixLavagePassage = element.prix;
    });

    console.log(this.prixLavage,  '      ', this.prixPassage,'     ',this.prixLavagePassage);

    this.prixToal=this.prixLavage+this.prixPassage+this.prixLavagePassage;
  }



}

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

  prixLavage: number[] = [];
  prixPassage: number[] = [];
  prixLavagePassage: number[] = [];
  prixLavageTotal = 0;
  prixPassageTotal = 0;
  prixLavagePassageTotal = 0;
  prixToal = 0;

  constructor(private articleService: ArticleService) { }
  ngOnInit() {
    this.calculPrixArticlrs();

  }


  calculPrixArticlrs() {

    // get price Data from article lavage selected
    this.listArticleSelectedLavage.forEach(element => {
      this.prixLavage.push(element.prix);
    });

    // calculate price of article lavage selected
    this.prixLavage.forEach(element => {
      this.prixLavageTotal += Number(element);
    });


    // get price Data from article passage selected
    this.listArticleSelectedPassage.forEach(element => {
      this.prixPassage.push(element.prix);
    });

    // calculate price of article lavage selected
    this.prixPassage.forEach(element => {
      this.prixPassageTotal += Number(element);
    });


    // get price Data from article lavage & passage selected
    this.listArticleSelectedLavagePassage.forEach(element => {
      this.prixLavagePassage.push(element.prix);
    });

    // calculate price of article lavage & passage selected
    this.prixLavagePassage.forEach(element => {
      this.prixLavagePassageTotal += Number(element);
    });


    // calculate total price of all article selected
    this.prixToal = Number(this.prixLavageTotal) + Number(this.prixPassageTotal) + Number(this.prixLavagePassageTotal);

  }


}

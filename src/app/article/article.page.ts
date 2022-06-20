import { Component, OnInit } from '@angular/core';
import { Article } from './article.modul';

@Component({
  selector: 'app-article',
  templateUrl: './article.page.html',
  styleUrls: ['./article.page.scss'],
})
export class ArticlePage implements OnInit {

  articlee : Article[] = [
    {
        id : "001",
        label : "Tricot",
        description : "Tricot",
        article_categorie :"Vetment",
        image : "https://ae01.alicdn.com/kf/HTB1e.pMblUSMeJjy1zkq6yWmpXaz/Automne-hiver-Mens-Chandails-noir-rouge-Gris-Couleur-Tricot-Marque-V-tements-Homme-de-Tricots-Pulls.jpg_Q90.jpg_.webp",
  },{
    id : "002",
    label : "pantalon",
    description : "pantalon",
    article_categorie :"Vetment-pantalon",
    image : "https://contents.mediadecathlon.com/p1741277/k$3ca4434b0e2725e9b874436f3b3f004f/pantalon-de-randonnee-nature-nh100-homme.jpg?&f=800x800",
}]
  
  constructor() { }

  ngOnInit() {
  }

}

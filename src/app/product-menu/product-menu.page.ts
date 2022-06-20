import { Component, OnInit } from '@angular/core';
import { Article } from '../article/modules/article.modul';

@Component({
  selector: 'app-product-menu',
  templateUrl: './product-menu.page.html',
  styleUrls: ['./product-menu.page.scss'],
})
export class ProductMenuPage implements OnInit {
  articlee: Article[] = [
    {
      id: '001',
      label: 'Tricot',
      description: 'Tricot',
      articleCategorie: 'Vetment',
      // eslint-disable-next-line max-len
      image: 'https://ae01.alicdn.com/kf/HTB1e.pMblUSMeJjy1zkq6yWmpXaz/Automne-hiver-Mens-Chandails-noir-rouge-Gris-Couleur-Tricot-Marque-V-tements-Homme-de-Tricots-Pulls.jpg_Q90.jpg_.webp',
    }, {
      id: '002',
      label: 'pantalon',
      description: 'pantalon',
      articleCategorie: 'Vetment-pantalon',
      // eslint-disable-next-line max-len
      image: 'https://contents.mediadecathlon.com/p1741277/k$3ca4434b0e2725e9b874436f3b3f004f/pantalon-de-randonnee-nature-nh100-homme.jpg?&f=800x800',
    }
  ];
  constructor() { }

  ngOnInit() {
  }

  unread() {

  }

}

import { Component, OnInit } from '@angular/core';
import { Article } from '../article/modules/article.modul';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-product-menu',
  templateUrl: './product-menu.page.html',
  styleUrls: ['./product-menu.page.scss'],
})
export class ProductMenuPage implements OnInit {
  nbrachat = 0;
  // eslint-disable-next-line @typescript-eslint/ban-types
  isLavage: Boolean = true;
  // eslint-disable-next-line @typescript-eslint/ban-types
  isPassage: Boolean = false;
  // eslint-disable-next-line @typescript-eslint/ban-types
  isLavagePassage: Boolean = false;

  listArticleSelectionner: any[] = [];

  articlee: Article[] = [
    {
      id: '001',
      label: 'Tricot',
      description: 'Tricot',
      prix: 30,
      quantity: 0,
      // eslint-disable-next-line max-len
      image: 'https://ae01.alicdn.com/kf/HTB1e.pMblUSMeJjy1zkq6yWmpXaz/Automne-hiver-Mens-Chandails-noir-rouge-Gris-Couleur-Tricot-Marque-V-tements-Homme-de-Tricots-Pulls.jpg_Q90.jpg_.webp',
    }, {
      id: '002',
      label: 'pantalon',
      description: 'pantalon',
      prix: 15,
      quantity: 0,
      // eslint-disable-next-line max-len
      image: 'https://contents.mediadecathlon.com/p1741277/k$3ca4434b0e2725e9b874436f3b3f004f/pantalon-de-randonnee-nature-nh100-homme.jpg?&f=800x800',
    }, {
      id: '003',
      label: 'Jacket',
      description: 'jacket-hiver',
      prix: 55,
      quantity: 0,
      // eslint-disable-next-line max-len
      image: 'https://laundry.vtlabs.dev/wp-content/uploads/2020/04/images-1-2.jpg',
    }, {
      id: '004',
      label: 'Souvetment',
      description: 'Souvetment',
      prix: 10,
      quantity: 0,
      // eslint-disable-next-line max-len
      image: 'https://laundry.vtlabs.dev/wp-content/uploads/2020/04/anthra-melange-grey-melange-resize.png',
    }, {
      id: '005',
      label: 'chemise',
      description: 'chemise-femme',
      prix: 13,
      quantity: 0,
      // eslint-disable-next-line max-len
      image: 'https://laundry.vtlabs.dev/wp-content/uploads/2020/04/product-hugerect-69117-17434-1357442618-471dcf7b2836e4a48834f72b185e810e.jpg',
    }, {
      id: '006',
      label: 'pantalon',
      description: 'pantalon',
      prix: 15,
      quantity: 0,
      // eslint-disable-next-line max-len
      image: 'https://contents.mediadecathlon.com/p1741277/k$3ca4434b0e2725e9b874436f3b3f004f/pantalon-de-randonnee-nature-nh100-homme.jpg?&f=800x800',
    }, {
      id: '007',
      label: 'pantalon',
      description: 'pantalon Semi-Cuir',
      prix: 15,
      quantity: 0,
      // eslint-disable-next-line max-len
      image: 'https://contents.mediadecathlon.com/p1741277/k$3ca4434b0e2725e9b874436f3b3f004f/pantalon-de-randonnee-nature-nh100-homme.jpg?&f=800x800',
    }, {
      id: '008',
      label: 'pantalon',
      description: 'pantalon Cuir',
      prix: 15,
      quantity: 0,
      // eslint-disable-next-line max-len
      image: 'https://contents.mediadecathlon.com/p1741277/k$3ca4434b0e2725e9b874436f3b3f004f/pantalon-de-randonnee-nature-nh100-homme.jpg?&f=800x800',
    }, {
      id: '009',
      label: 'Vest',
      description: 'pantalon',
      prix: 15,
      quantity: 0,
      // eslint-disable-next-line max-len
      image: 'https://contents.mediadecathlon.com/p1741277/k$3ca4434b0e2725e9b874436f3b3f004f/pantalon-de-randonnee-nature-nh100-homme.jpg?&f=800x800',
    }
    , {
      id: '010',
      label: 'Cuir Vest',
      description: 'pantalon',
      prix: 15,
      quantity: 0,
      // eslint-disable-next-line max-len
      image: 'https://contents.mediadecathlon.com/p1741277/k$3ca4434b0e2725e9b874436f3b3f004f/pantalon-de-randonnee-nature-nh100-homme.jpg?&f=800x800',
    }
  ];

  type = 'lavage';
  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    this.getAllArticles();
    // this.type='lavage';
  }

  unread() {

  }

  plus(idArticle: any) {
    this.articlee.forEach(element => {
      if (idArticle === element.id) {
        element.quantity++;
      }
    });
  }

  mois(idArticle: any) {
    this.articlee.forEach(element => {
      if (idArticle === element.id) {
        element.quantity--;
      }
    });
  }

  lavage() {
    this.isLavage = true;
    this.isPassage = false;
    this.isLavagePassage = false;

  }

  repassage() {
    this.isLavage = false;
    this.isPassage = true;
    this.isLavagePassage = false;
  }

  lavageRepassage() {
    this.isLavagePassage = true;
    this.isLavage = false;
    this.isPassage = false;
  }

  plusLavage(idArticle: any) {
    this.articlee.forEach(element => {
      if (idArticle === element.id) {
        element.quantity++;
        this.listArticleSelectionner.push(element);
      }
    });
    console.log(this.listArticleSelectionner);
  }

  moisLavage(idArticle: any) {
    this.articlee.forEach(element => {
      if (idArticle === element.id) {
        element.quantity--;
      }
    });

    this.listArticleSelectionner.forEach((vaule, index) => {
      if (vaule.id === idArticle) {
        this.listArticleSelectionner.splice(index, 1);
      }
    });
    console.log(this.listArticleSelectionner);

  }

  plusPassage(idArticle: any) {

  }

  moisPassage(idArticle: any) {

  }

  plusLavagePassage(idArticle: any) {

  }

  moisLavagePassage(idArticle: any) {

  }

  getAllArticles() {
    this.articleService.getAllArticles().subscribe(data => {
      console.log(data);
    }, err => {

    });
  }
}

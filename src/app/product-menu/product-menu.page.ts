/* eslint-disable prefer-arrow/prefer-arrow-functions */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { timer } from 'rxjs';
import { Article } from '../article/modules/article.modul';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-product-menu',
  templateUrl: './product-menu.page.html',
  styleUrls: ['./product-menu.page.scss'],
})
export class ProductMenuPage implements OnInit {

  // eslint-disable-next-line @typescript-eslint/ban-types
  isLavage: Boolean = true;
  // eslint-disable-next-line @typescript-eslint/ban-types
  isPassage: Boolean = false;
  // eslint-disable-next-line @typescript-eslint/ban-types
  isLavagePassage: Boolean = false;

  allArticleSelected: any[] = [];

  listArticleSelectionnerLavage: any[] = [];

  listArticleSelectionnerPassage: any[] = [];

  listArticleSelectionnerLavagePassage: any[] = [];

  articleLavage: Article[] = [];

  articlePassage: Article[] = [];

  articleLavagePassage: Article[] = [];

  test: Article[] = [];

  articlee: any[] = [];
  //   {
  //     id: '001',
  //     label: 'Tricot',
  //     description: 'Tricot',
  //     prix: 30,
  //     quantity: 0,
  // eslint-disable-next-line max-len
  //     image: 'https://ae01.alicdn.com/kf/HTB1e.pMblUSMeJjy1zkq6yWmpXaz/Automne-hiver-Mens-Chandails-noir-rouge-Gris-Couleur-Tricot-Marque-V-tements-Homme-de-Tricots-Pulls.jpg_Q90.jpg_.webp',
  //   }, {
  //     id: '002',
  //     label: 'pantalon',
  //     description: 'pantalon',
  //     prix: 15,
  //     quantity: 0,
  // eslint-disable-next-line max-len
  //     image: 'https://contents.mediadecathlon.com/p1741277/k$3ca4434b0e2725e9b874436f3b3f004f/pantalon-de-randonnee-nature-nh100-homme.jpg?&f=800x800',
  //   }, {
  //     id: '003',
  //     label: 'Jacket',
  //     description: 'jacket-hiver',
  //     prix: 55,
  //     quantity: 0,
  //     // eslint-disable-next-line max-len
  //     image: 'https://laundry.vtlabs.dev/wp-content/uploads/2020/04/images-1-2.jpg',
  //   }, {
  //     id: '004',
  //     label: 'Souvetment',
  //     description: 'Souvetment',
  //     prix: 10,
  //     quantity: 0,
  //     // eslint-disable-next-line max-len
  //     image: 'https://laundry.vtlabs.dev/wp-content/uploads/2020/04/anthra-melange-grey-melange-resize.png',
  //   }, {
  //     id: '005',
  //     label: 'chemise',
  //     description: 'chemise-femme',
  //     prix: 13,
  //     quantity: 0,
  // eslint-disable-next-line max-len
  //     image: 'https://laundry.vtlabs.dev/wp-content/uploads/2020/04/product-hugerect-69117-17434-1357442618-471dcf7b2836e4a48834f72b185e810e.jpg',
  //   }, {
  //     id: '006',
  //     label: 'pantalon',
  //     description: 'pantalon',
  //     prix: 15,
  //     quantity: 0,
  // eslint-disable-next-line max-len
  //     image: 'https://contents.mediadecathlon.com/p1741277/k$3ca4434b0e2725e9b874436f3b3f004f/pantalon-de-randonnee-nature-nh100-homme.jpg?&f=800x800',
  //   }, {
  //     id: '007',
  //     label: 'pantalon',
  //     description: 'pantalon',
  //     prix: 15,
  //     quantity: 0,
  // eslint-disable-next-line max-len
  //     image: 'https://contents.mediadecathlon.com/p1741277/k$3ca4434b0e2725e9b874436f3b3f004f/pantalon-de-randonnee-nature-nh100-homme.jpg?&f=800x800',
  //   }, {
  //     id: '008',
  //     label: 'pantalon',
  //     description: 'pantalon',
  //     prix: 15,
  //     quantity: 0,
  // eslint-disable-next-line max-len
  //     image: 'https://contents.mediadecathlon.com/p1741277/k$3ca4434b0e2725e9b874436f3b3f004f/pantalon-de-randonnee-nature-nh100-homme.jpg?&f=800x800',
  //   }, {
  //     id: '009',
  //     label: 'pantalon',
  //     description: 'pantalon',
  //     prix: 15,
  //     quantity: 0,
  // eslint-disable-next-line max-len
  //     image: 'https://contents.mediadecathlon.com/p1741277/k$3ca4434b0e2725e9b874436f3b3f004f/pantalon-de-randonnee-nature-nh100-homme.jpg?&f=800x800',
  //   }
  //   , {
  //     id: '010',
  //     label: 'pantalon',
  //     description: 'pantalon',
  //     prix: 15,
  //     quantity: 0,
  // eslint-disable-next-line max-len
  //     image: 'https://contents.mediadecathlon.com/p1741277/k$3ca4434b0e2725e9b874436f3b3f004f/pantalon-de-randonnee-nature-nh100-homme.jpg?&f=800x800',
  //   }
  // ];

  type = 'lavage';
  constructor(private articleService: ArticleService,
    private router: Router) { }

  ngOnInit() {
    this.getArticleByService();
    // this.getAllArticles();

  }

  unread() {

  }

  // plus(idArticle: any) {
  //   this.articlee.forEach(element => {
  //     if (idArticle === element.id) {
  //       element.quantity++;
  //     }
  //   });
  // }

  // mois(idArticle: any) {
  //   this.articlee.forEach(element => {
  //     if (idArticle === element.id) {
  //       element.quantity--;
  //     }
  //   });
  // }

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
    this.articleLavage.forEach(element => {
      if (idArticle === element.id) {
        element.quantity++;
        this.listArticleSelectionnerLavage.push(element);
      }
    });
    console.log(this.listArticleSelectionnerLavage);
  }

  moisLavage(idArticle: any) {
    this.articleLavage.forEach(element => {
      if (idArticle === element.id) {
        element.quantity--;
      }
    });

    this.listArticleSelectionnerLavage.forEach((vaule, index) => {
      if (vaule.id === idArticle) {
        this.listArticleSelectionnerLavage.splice(index, 1);
      }
    });
    console.log(this.listArticleSelectionnerLavage);

  }

  plusPassage(idArticle: any) {
    this.articlePassage.forEach(element => {
      if (idArticle === element.id) {
        element.quantity++;
        console.log(element.quantity);
        this.listArticleSelectionnerPassage.push(element);
      }
    });
    console.log(this.listArticleSelectionnerPassage);
  }

  moisPassage(idArticle: any) {
    this.articlePassage.forEach(element => {
      if (idArticle === element.id) {
        element.quantity--;
      }
    });

    this.listArticleSelectionnerPassage.forEach((vaule, index) => {
      if (vaule.id === idArticle) {
        this.listArticleSelectionnerPassage.splice(index, 1);
      }
    });
    console.log(this.listArticleSelectionnerPassage);

  }

  plusLavagePassage(idArticle: any) {
    this.articleLavagePassage.forEach(element => {
      if (idArticle === element.id) {
        element.quantity++;
        this.listArticleSelectionnerLavagePassage.push(element);
      }
    });
    console.log(this.listArticleSelectionnerLavagePassage);
  }

  moisLavagePassage(idArticle: any) {
    this.articleLavagePassage.forEach(element => {
      if (idArticle === element.id) {
        element.quantity--;
      }
    });

    this.listArticleSelectionnerLavagePassage.forEach((vaule, index) => {
      if (vaule.id === idArticle) {
        this.listArticleSelectionnerLavagePassage.splice(index, 1);
      }
    });
    console.log(this.listArticleSelectionnerLavagePassage);
  }

  // getAllArticles() {
  //   this.articleService.getAllArticles().subscribe(data => {
  //     this.articlee = data[0][0];
  //     this.articlee.forEach(element => {
  //       if (element.service_id === 1) {
  //         this.articleLavage = element;
  //         console.log('articleLavage',data);
  //       }
  //       if (element.service_id === 2) {
  //         this.articlePassage = element;
  //         console.log('articlePassage',data);
  //       }
  //       if (element.service_id === 3) {
  //         this.articleLavagePassage = element;
  //         console.log('articleLavagePassage',data);
  //       }
  //     });
  //   }, err => {

  //   });
  // }


  getArticleByService() {
    this.articleService.getArticleByService(1).subscribe(data => {

      this.articleLavage = Object.values(data);
      this.articleLavage.forEach(element => {
        element.quantity = 0;
      });

    }, err => {
    });

    this.articleService.getArticleByService(2).subscribe(data => {
      this.articlePassage = Object.values(data);
      this.articlePassage.forEach(element => {
        element.quantity = 0;
      });
    }, err => {
    });

    this.articleService.getArticleByService(3).subscribe(data => {
      this.articleLavagePassage = Object.values(data);
      this.articleLavagePassage.forEach(element => {
        element.quantity = 0;
      });
    }, err => {
    });

  }

  checkout() {
    // this.allArticleSelected = [];
    // this.allArticleSelected.push(this.listArticleSelectionnerLavage);
    // this.allArticleSelected.push(this.listArticleSelectionnerPassage);
    // this.allArticleSelected.push(this.listArticleSelectionnerLavagePassage);

    this.articleService.listArticleSelectedLavage = this.listArticleSelectionnerLavage;
    this.articleService.listArticleSelectedPassage = this.listArticleSelectionnerPassage;
    this.articleService.listArticleSelectedLavagePassage = this.listArticleSelectionnerLavagePassage;

    this.router.navigateByUrl('/checkout');

  }
}

import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
//import PayScript from '../../app/paiment/PaypalScript';

declare var Paypal;
@Component({
  selector: 'app-paiment',
  templateUrl: './paiment.page.html',
  styleUrls: ['./paiment.page.scss'],
})
export class PaimentPage implements OnInit {
 //@ViewChild('Paypal', { static : true}) PaypalElement: ElementRef;

  constructor() { }

  ngOnInit() {
    // Paypal.Buttons({
    //   createOrder: function (data, actions) {
    //     return actions.order.create ({
    //       purchase_units: [
    //         {
    //           description: "Article Information",
    //           amount : {
    //             currency_code: 'MAD',
    //             value : "0.01",
    //           },
    //         },
    //       ],
    //     })
    //   },
    
    //   onApprove: function (data,actions) {
    //     return actions.order.capture().then(function (details){
    //       alert("Transaction completed by " + details.payer.name.given_name) ;
    //       // console.log(order)
    //     },);
    //   },
    // }).render('#paypal');
  }
  
}

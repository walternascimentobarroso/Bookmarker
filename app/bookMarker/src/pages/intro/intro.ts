import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from "../home/home";

@IonicPage()
@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html',
})
export class IntroPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  slides = [
    {
      title: "Bem vindo ao BookMarker!",
      description: "O <b>BookMarker</b> vai lhe auxiliar para que você nunca mais esqueça qual o ultimo livro lido.",
      image: "assets/img/slide1.jpg",
    }
  ];

  goToHome() {
    this.navCtrl.setRoot(HomePage);
  }
}

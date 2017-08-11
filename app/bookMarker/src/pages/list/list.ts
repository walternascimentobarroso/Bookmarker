import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  public livros: any[];

  constructor(public navCtrl: NavController) {

  }

  items = [
    {
      ano: '2000',
      title: "O Ladrão de Raios",
      author: "Rick Riordan",
      image: "assets/img/1.jpeg",
    },
    {
      ano: '2001',
      title: "O Mar de Monstros",
      author: "Rick Riordan",
      image: "assets/img/2.jpeg",
    },
    {
      ano: '2002',
      title: "A Maldição do Titãs",
      author: "Rick Riordan",
      image: "assets/img/3.jpeg",
    },
    {
      ano: '2003',
      title: "A Batalha do Labirinto",
      author: "Rick Riordan",
      image: "assets/img/4.jpeg",
    },
    {
      ano: '2004',
      title: "O Último Olimpiano",
      author: "Rick Riordan",
      image: "assets/img/5.jpeg",
    }
  ];
  goToCadastro() {
    this.navCtrl.push('CadastroPage');
  }
}
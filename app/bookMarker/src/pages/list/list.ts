import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import 'rxjs/add/operator/map';
import { BooksReadProvider } from "../../providers/books-read/books-read";

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  public livros: any[];
  public items: any;
  constructor(public navCtrl: NavController, public booksReadProvider: BooksReadProvider) {

    this.items = booksReadProvider.getBookData();
  }

  goToCadastro() {
    this.navCtrl.push('CadastroPage');
  }
}

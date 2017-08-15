import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ListPage } from "../list/list";

import 'rxjs/add/operator/map';
import { BooksReadProvider } from "../../providers/books-read/books-read";

@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {

  public livros: any[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private http: Http,
    public booksReadProvider: BooksReadProvider) { }

  addBook(data) {
    let el1 = {
      ano: data.publishedDate,
      title: data.title,
      author: data.authors,
      image: data.imageLinks.smallThumbnail
    };
    this.booksReadProvider.setBookData(el1);
    this.navCtrl.setRoot(ListPage);
  }

  onInput($event: any) {

    let url = "https://www.googleapis.com/books/v1/volumes?q=" + $event.target.value.replace(/\s/g, "+") + "&maxResults=10&startIndex=0";

    this.http.get(url)
      .map((res: Response) => {
        let body = res.json();
        return body || {};
      })
      .subscribe(livros => this.livros = livros.items);
  }
}

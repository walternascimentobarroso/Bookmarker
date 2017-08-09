import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import { NavController, NavParams } from 'ionic-angular';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
 public livros: any[];

  constructor(public navCtrl: NavController, private http: Http) {

  }

  ngOnInit() {
    this.http.get('https://www.googleapis.com/books/v1/volumes/2W6WqK2dP1IC')
      .map((res: Response) => {
        let body = res.json();
        return body || {};
      })
      .subscribe(livros => {this.livros = livros; console.log(livros)})
  }
}
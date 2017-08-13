import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import 'rxjs/add/operator/map';

@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {

  public livros: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http) {
  }

  onInput($event: any) {

    let url = "https://www.googleapis.com/books/v1/volumes?q="+$event.target.value.replace(/\s/g,"+")+"&maxResults=10&startIndex=0";
    
    console.log(url);
    this.http.get(url)
      .map((res: Response) => {
        let body = res.json();
        return body || {};
      })
      .subscribe(livros => this.livros = livros.items);
  }
}

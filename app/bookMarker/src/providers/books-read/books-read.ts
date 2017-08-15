import { Injectable } from '@angular/core';

let books_read = "books";

@Injectable()
export class BooksReadProvider {
  private items = [];

  constructor() { }

  //Recupera os dados do localStorage
  getBookData(): any {
    return JSON.parse(localStorage.getItem(books_read));
  }

  //Grava os dados no localStorage
  setBookData(data) {
    let book = data;
    if(this.items.length == 0) {
      this.items = this.getBookData();
    }
    this.items.unshift(book);
    localStorage.setItem(books_read, JSON.stringify(this.items));
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent implements OnInit {

  public defaultUrlTheme = './assets/css/colors/default-dark.css';

  constructor() { }

  ngOnInit(): void {
    const defaultTheme = document.querySelector('#theme');
    const localStorageContains = localStorage.getItem('theme');
    defaultTheme?.setAttribute('href', localStorageContains?localStorageContains:this.defaultUrlTheme);
  }

}

import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../services/settings.service';

declare function customInitFunction(): any;

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent implements OnInit {

  public defaultUrlTheme = './assets/css/colors/default-dark.css';

  constructor( private settinsService: SettingsService ) { }

  ngOnInit(): void {

    customInitFunction();

    const defaultTheme = document.querySelector('#theme');
    const localStorageContains = localStorage.getItem('theme');
    defaultTheme?.setAttribute('href', localStorageContains?localStorageContains:this.defaultUrlTheme);
  }

}


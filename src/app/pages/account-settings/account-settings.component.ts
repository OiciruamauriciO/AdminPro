import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [
  ]
})
export class AccountSettingsComponent implements OnInit {

  public linkTheme = document.querySelector('#theme');
  public links: NodeListOf<Element>;

  constructor(private settingService: SettingsService) {
    this.links = document.querySelectorAll('.selector');
  }

  ngOnInit(): void {
    this.links = document.querySelectorAll('.selector');
  }

  changeTheme( theme: string){
    this.settingService.changeTheme(theme);
    this.settingService.checkCurrentTheme(this.links);
  }

}

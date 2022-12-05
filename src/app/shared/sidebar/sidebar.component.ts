import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public numElements: number = 0;
  public titulo: string = '';
  public subMenu: any[] = [];

  constructor(private sidebarService: SidebarService) {
    this.menuItems = this.sidebarService.menu;
    this.numElements = this.sidebarService.numElements;
    this.titulo = this.sidebarService.menu[0].titulo;
    this.subMenu = this.sidebarService.menu[0].subMenu;
  }

  ngOnInit(): void {
  }

}

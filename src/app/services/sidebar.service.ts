import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  
  public menu: any[] = [
    {
      titulo: 'Dashboard',
      icono: 'mdi mdi-gauge',
      subMenu: [
        { titulo: 'Principal', url: '' },
        { titulo: 'ProgressBar', url: 'progress' },
        { titulo: 'Grafica', url: 'grafica1' }
      ]
    }
  ]

  public numElements: number = 0;

  constructor() { 
    this.numElements = this.menu[0].subMenu.length;
  }
}

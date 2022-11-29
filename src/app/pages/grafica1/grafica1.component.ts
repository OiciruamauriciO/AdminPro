import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [],
})
export class Grafica1Component {

  public title1: string = 'Gráfico I';
  public title2: string = 'Gráfico II';
  public title3: string = 'Gráfico III';
  public title4: string = 'Gráfico IV';

  public labels1: string[] = [    
    'Download Sales 1',
    'In-Store Sales 1',
    'Mail-Order Sales 1',
  ];

  public labels2: string[] = [    
    'Download Sales 2',
    'In-Store Sales 2',
    'Mail-Order Sales 2',
  ];
  

  public labels3: string[] = [    
    'Download Sales 3',
    'In-Store Sales 3',
    'Mail-Order Sales 3',
  ];

  public labels4: string[] = [    
    'Download Sales 4',
    'In-Store Sales 4',
    'Mail-Order Sales 4',
  ];  

  public data1: number[] = [10, 15, 40];
}

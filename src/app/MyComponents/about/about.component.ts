import { Component, Input } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({backgroundColor: 'white', opacity: 0}),
        animate(2000,  style({backgroundColor: 'white', opacity: 1}))
      ])
    
  ])]
})
export class AboutComponent {
  @Input() webmaster = 'Michal Maciejewski';
  @Input() index_no = '64262';
}




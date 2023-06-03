
import { Component, Input } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({backgroundColor: 'white', opacity: 0}),
        animate(2000,  style({backgroundColor: 'white', opacity: 1}))
      ])
    
  ])]
})
export class FooterComponent {
  @Input() webmaster = '';
  @Input() index_no = '';
}


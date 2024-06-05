import { Component } from '@angular/core';

import { CardComponent } from './card/card.component';

@Component({
  standalone: true,
  selector: 'app-root',
  template: `<h1 id="Title">Jade Palace</h1>
  
  <nav>
        <ul>
            <li><a href="#index">Jade Palace</a></li>
            <li><a href="#dashboard">Dashboard</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>
    <section>
      <app-card></app-card>
    </section>
  `,
  imports: [CardComponent],
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'homes';
}

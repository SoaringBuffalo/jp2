import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      card works
    </p>
  `,
  styleUrls: ['./card.component.css']
})
export class CardComponent {

}

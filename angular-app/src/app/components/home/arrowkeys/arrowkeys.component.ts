import { Component, EventEmitter, Output } from '@angular/core';
import {
  faArrowDown,
  faArrowLeft,
  faArrowRight,
  faArrowUp,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-arrowkeys',
  templateUrl: './arrowkeys.component.html',
  styleUrls: ['./arrowkeys.component.scss'],
})
export class ArrowkeysComponent {
  faArrowUp = faArrowUp;
  faArrowLeft = faArrowLeft;
  faArrowDown = faArrowDown;
  faArrowRight = faArrowRight;

  @Output() keyClicked = new EventEmitter<any>();

  clicked(value: any): void {
    this.keyClicked.emit(value);
  }
}

import { Component, OnInit } from '@angular/core';
import { faArrowDown, faArrowLeft, faArrowRight, faArrowUp, faCoffee } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-arrowkeys',
  templateUrl: './arrowkeys.component.html',
  styleUrls: ['./arrowkeys.component.scss']
})
export class ArrowkeysComponent implements OnInit {

  faArrowUp = faArrowUp;
  faArrowLeft = faArrowLeft;
  faArrowDown = faArrowDown;
  faArrowRight = faArrowRight;

  constructor() { }

  ngOnInit(): void {
  }

}

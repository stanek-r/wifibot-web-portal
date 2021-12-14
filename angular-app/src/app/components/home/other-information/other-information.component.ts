import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { LogService } from '../../../services/log.service';

@Component({
  selector: 'app-other-information',
  templateUrl: './other-information.component.html',
  styleUrls: ['./other-information.component.scss'],
})
export class OtherInformationComponent {
  readonly logsSub?: Observable<string[]>;

  constructor(private readonly logService: LogService) {
    this.logsSub = this.logService.getLogs();
  }
}

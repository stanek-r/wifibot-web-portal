import { Component } from '@angular/core';
import { LogService } from '../../services/log.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  rotateDirection?: number;

  constructor(private readonly logService: LogService) {}

  isRotationSet(): boolean {
    return this.rotateDirection === undefined;
  }

  moveKeyClicked(value: any): void {
    this.logService.addToLog('Move key clicked ' + value);
  }

  setRotation(value: number): void {
    this.rotateDirection = value;
    this.logService.addToLog('Rotation set to ' + value);
  }

  rotate(degrees: number): void {
    this.logService.addToLog(
      'Rotation by ' + degrees + ' set to ' + this.rotateDirection
    );
    this.rotateDirection = undefined;
  }
}

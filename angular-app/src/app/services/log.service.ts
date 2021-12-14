import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class LogService {
  private readonly logsSub = new ReplaySubject<string[]>(1);

  constructor() {
    this.logsSub.next([]);
  }

  addToLog(value: string): void {
    this.logsSub.pipe(take(1)).subscribe((logs) => {
      logs.unshift(value);
      this.logsSub.next(logs);
    });
  }

  getLogs(): Observable<string[]> {
    return this.logsSub;
  }
}

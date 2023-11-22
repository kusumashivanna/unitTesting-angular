import { Injectable } from '@angular/core';
import { LogerService } from './loger.service';

@Injectable({
  providedIn: 'root',
})
export class CalucualtorService {
  constructor(public logger: LogerService) {}
  add(a: number, b: number) {
    this.logger.log('add');
    this.logger.log('add1');

    return a + b;
  }
  substract(a: number, b: number) {
    this.logger.log('subtract');

    return a - b;
  }
}

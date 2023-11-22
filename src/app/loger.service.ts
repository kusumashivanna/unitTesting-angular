import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LogerService {
  constructor() {}
  log(message: string) {
    return message;
  }
}

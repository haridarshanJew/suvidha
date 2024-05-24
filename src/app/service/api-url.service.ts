import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiUrlService {
  public url: any =
    'https://script.google.com/macros/s/AKfycbzNwer0OhWz3Out4EHKVZCKYTN3sMD1NTYrpVYvZF932KWrVad06YJHDOVoeU5Z4qW3/exec?';
  constructor() {}
}

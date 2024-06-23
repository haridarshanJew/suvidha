import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiUrlService {
  public url: any =
    'https://script.google.com/macros/s/AKfycbyZADg1xqXgX0w1JteqgdB4jjwJpE7RCtWfFppveduvh49KUJ1YQBq7t4QHYzUeVw/exec?';
  constructor() {}
}

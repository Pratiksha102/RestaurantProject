import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestoService {

  constructor() { }

  getList()
  {
    console.log("data is being called");
    return "data list here";
  }
}

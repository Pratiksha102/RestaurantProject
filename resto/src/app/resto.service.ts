import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestoService {

  url="http://localhost:3000/posts";

  constructor(private http:HttpClient) { }

  getList()
  {
   
    return this.http.get(this.url);
  }

  saveResto(data:any)
  {
    console.log(data);
    return this.http.post(this.url,data);
  }
}

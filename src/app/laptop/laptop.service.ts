import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http'
import { Observable, throwError,} from 'rxjs';
import {catchError} from 'rxjs/operators'
import { Laptop } from './laptop';
const url = "http://localhost:8765/laptops"
@Injectable({
  providedIn: 'root'
})

export class LaptopService {

  constructor(private http: HttpClient) { }


  addLaptop(laptop:Laptop):Observable<Laptop>
  {
    return this.http.post<Laptop>(url, laptop)
    .pipe(catchError(this.handleError));
  }
  getLaptops():Observable<Laptop[]>
  {
    return this.http.get<Laptop[]>(url)
    .pipe(catchError(this.handleError));
  }
  deleteLaptop(id:number):Observable<Laptop>
  {
    return this.http.delete<Laptop>(url+"/"+id)
    .pipe(catchError(this.handleError));
  }

  private handleError(err: HttpErrorResponse)
  {
    console.log(err);
    let errMsg: string ="";
    switch (err.status)
    {
      case 400:
        errMsg="invalid request";
        break;
      case 404:
        errMsg="the resource you're looking for cannot be found"
        break;
      case 0:
        errMsg="cannot connect to backend"
        break;
      default:
        errMsg="ya dun goofed! error code"+err.status;
    }
    console.log(errMsg);
    return throwError(errMsg);
  }
}

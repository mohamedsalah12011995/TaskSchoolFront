import { Injectable, Inject } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable, throwError, Subject } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';
import { HttpErrorResponse, HttpParams, HttpClient, HttpHeaders } from '@angular/common/http';
import { School } from '../models/School'

@Injectable({
  providedIn: 'root'
})
export class RepoService   {

  private urlApi:string=environment.baseUrl;

  //private SchoolUrl: string = environment.baseUrl + 'api/School/';

  constructor(private http: HttpClient) {}

  getAPIUrl(){
    return this.urlApi;
  }


  InsertOrUpdate(url,param): Observable<any> {

    //let url = this.BillUrl + "InsertOrUpdateNote"
    return this.http.post<any>(url, param).pipe(
      tap(data => {
      }),
      catchError(this.handleError)
    );
  }


  getAll(url): Observable<any[]> {
    //let url = this.SchoolUrl + "GetBillTypes";
    return this.http.get<any[]>(url).pipe(
      tap(data => { }),
      catchError(this.handleError)
    );
  }


  getById(id: number,url): Observable<any> {
    //let url = this.BaseItemrUrl + "GetItemByid";

    const param = new HttpParams().append('id', id.toString())
    return this.http.get<any>(url, { params: param }).pipe(
      tap(data => { }),
      catchError(this.handleError)
    );
  }

  delete(id: number,url): Observable<any> {
    //let url = this.BaseItemrUrl + "GetItemByid";

    const param = new HttpParams().append('id', id.toString())
    return this.http.delete<any>(url, { params: param }).pipe(
      tap(data => { }),
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }


}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, retry, catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpclientcustomService {
  private readonly retry = 0;

  constructor(
    private readonly httpClient: HttpClient,
    @Inject('Url') private Url: string
  ) {}

  get<T>(url: string): Observable<T> {
    return this.httpClient.get<T>(`${this.Url}${url}`).pipe(
      retry(this.retry),
      catchError((error) => {
        console.log({ error });
        return of();
      })
    );
  }

  post<T>(url: string, item: T): Observable<T> {
    return this.httpClient.post<T>(`${this.Url}${url}`, item).pipe(
      retry(this.retry),
      catchError((error) => {
        console.log({ error });
        return of();
      })
    );
  }

  put<T>(url: string, item: T): Observable<T> {
    return this.httpClient.put<T>(`${this.Url}${url}`, item).pipe(
      retry(this.retry),
      catchError((error) => {
        console.log({ error });
        return of();
      })
    );
  }

  delete<T>(url: string): Observable<T> {
    return this.httpClient.delete<T>(`${this.Url}${url}`).pipe(
      retry(this.retry),
      catchError((error) => {
        console.log({ error });
        return of();
      })
    );
  }

  deleteWithBody<T>(url: string, prop: any): Observable<T> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: prop,
    };
    return this.httpClient.delete<T>(`${this.Url}${url}`, httpOptions).pipe(
      retry(this.retry),
      catchError((error) => {
        console.log({ error });
        return of();
      })
    );
  }
}

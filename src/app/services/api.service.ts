import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpclientcustomService } from './httpclientcustom.service';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export default class ApiService {
  httpClientBase!: HttpclientcustomService;

  constructor(private readonly httpClient: HttpClient) {
    this.httpClientBase = new HttpclientcustomService(httpClient, environment.baseURL);
  }


  public getRubroTest(): void {
    this.httpClientBase.get<any>('/Rubro').subscribe((s) => console.log(s));
  }
}

import { Component, OnInit } from '@angular/core';
import ApiService from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'Hola Mundo desde el buen sabor!';

  constructor(private readonly apiService: ApiService)
  {}

  ngOnInit(): void {
    this.apiService.getRubroTest();
  }
}

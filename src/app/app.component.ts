import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AppService } from './app.service';

@Component({
  providers: [],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'mulah-simple-assessment';
  service = inject(AppService);

  table1Data = this.service.table1Data;
  table2Data = this.service.table2Data;

  constructor(private http: HttpClient) {
    this.service.loadCSVData();
  }
}

export interface TableData {
  'Index #': string;
  Value: string;
}

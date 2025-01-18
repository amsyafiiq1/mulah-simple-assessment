import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { TableData } from './app.component';
import Papa from 'papaparse';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  http = inject(HttpClient);

  table1Data = signal<TableData[]>([]);

  table2Data = computed(() => {
    return [
      {
        category: 'Alpha',
        value:
          (this.table1Data().find((data) => data['Index #'] === 'A5')?.Value ||
            0) +
          (this.table1Data().find((data) => data['Index #'] === 'A20')?.Value ||
            0),
      },
      {
        category: 'Beta',
        value:
          (this.table1Data().find((data) => data['Index #'] === 'A15')?.Value ||
            0) /
          (this.table1Data().find((data) => data['Index #'] === 'A7')?.Value ||
            0),
      },
      {
        category: 'Charlie',
        value:
          (this.table1Data().find((data) => data['Index #'] === 'A13')?.Value ||
            0) *
          (this.table1Data().find((data) => data['Index #'] === 'A12')?.Value ||
            0),
      },
    ];
  });

  loadCSVData() {
    const csvFilePath = '/Table_Input.csv';
    this.http.get(csvFilePath, { responseType: 'text' }).subscribe({
      next: (csvText) => {
        Papa.parse(csvText, {
          header: true,
          complete: (result) => {
            console.log('CSV file loaded:', result.data);
            this.table1Data.set(result.data as TableData[]);
          },
        });
      },
      error: (error) => {
        console.error('Error loading CSV file:', error);
      },
    });
  }
}

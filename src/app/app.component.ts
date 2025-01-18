import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'mulah-simple-assessment';

  table1Data = signal<TableData[]>([
    { index: 'A1', value: 41 },
    { index: 'A2', value: 18 },
    { index: 'A3', value: 21 },
    { index: 'A4', value: 63 },
    { index: 'A5', value: 2 },
    { index: 'A6', value: 53 },
    { index: 'A7', value: 5 },
    { index: 'A8', value: 57 },
    { index: 'A9', value: 60 },
    { index: 'A10', value: 93 },
    { index: 'A11', value: 28 },
    { index: 'A12', value: 3 },
    { index: 'A13', value: 90 },
    { index: 'A14', value: 39 },
    { index: 'A15', value: 80 },
    { index: 'A16', value: 88 },
    { index: 'A17', value: 49 },
    { index: 'A18', value: 60 },
    { index: 'A19', value: 26 },
    { index: 'A20', value: 28 },
  ]);

  table2Data = computed(() => {
    return [
      {
        category: 'Alpha',
        value:
          (this.table1Data().find((data) => data.index === 'A5')?.value || 0) +
          (this.table1Data().find((data) => data.index === 'A20')?.value || 0),
      },
      {
        category: 'Beta',
        value:
          (this.table1Data().find((data) => data.index === 'A15')?.value || 0) /
          (this.table1Data().find((data) => data.index === 'A7')?.value || 0),
      },
      {
        category: 'Charlie',
        value:
          (this.table1Data().find((data) => data.index === 'A13')?.value || 0) *
          (this.table1Data().find((data) => data.index === 'A12')?.value || 0),
      },
    ];
  });

  constructor() {}
}

export interface TableData {
  index: string;
  value: number;
}

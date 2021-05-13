import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css'],
})
export class ResultComponent {
  @Input() resultValue = 0;
  constructor() {
    // Construtor vazio
  }

  formatValue() {
    const formatter = Intl.NumberFormat('pt-BR');
    return formatter.format(this.resultValue);
  }
}

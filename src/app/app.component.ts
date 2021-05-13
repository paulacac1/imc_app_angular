import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  pesoValue = 0;
  alturaValue = 0;
  resultValue = 0;
  index = 0;

  constructor() {
    // Construtor vazio
  }

  calculaIMC() {
    if (this.alturaValue <= 0 || this.pesoValue <= 0) {
      return;
    }

    this.resultValue = this.pesoValue / (this.alturaValue * this.alturaValue);

    if (this.resultValue < 18.5) {
      this.index = 1;
    } else if (this.resultValue < 25) {
      this.index = 2;
    } else if (this.resultValue < 30) {
      this.index = 3;
    } else if (this.resultValue < 40) {
      this.index = 4;
    } else {
      this.index = 5;
    }
  }

  limparCampos = () => {
    this.pesoValue = 0;
    this.alturaValue = 0;
    this.resultValue = 0;
    this.index = 0;
  };
}

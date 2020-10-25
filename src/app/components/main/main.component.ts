import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  result = 0;
  tempValue = '0';
  lastOperator = operator_status.result;
  join = false;

  constructor() { }

  ngOnInit(): void {
  }

  numKey(event): void {
    if (this.join) {
      this.tempValue = this.tempValue + event;
      this.tempValue = this.tempValue.split('.').slice(0, 2).join('.');
    }
    else {
      this.tempValue = event;
    }
    this.join = true;
  }

  reset(): void {
    this.clear();
    this.result = 0;
    this.lastOperator = operator_status.result;
  }

  clear(): void {
    this.tempValue = '0';
    this.join = false;
  }

  operate(event): void {
    this.join = false;
    this.calculate();
    this.tempValue = this.result.toString();
    switch (event) {
      case 'x':
        this.lastOperator = operator_status.multiply;
        break;
      case '/':
        this.lastOperator = operator_status.devide;
        break;
      case '+':
        this.lastOperator = operator_status.sum;
        break;
      case '-':
        this.lastOperator = operator_status.subtract;
        break;
      case '=':
        this.lastOperator = operator_status.result;
        this.result = 0;
        break;

      default:
        break;
    }
  }

  private calculate(): void {
    switch (this.lastOperator) {
      case operator_status.sum:
        this.result = this.result + +this.tempValue;
        break;
      case operator_status.subtract:
        this.result = this.result - +this.tempValue;
        break;
      case operator_status.multiply:
        this.result = this.result * +this.tempValue;
        break;
      case operator_status.devide:
        this.result = this.result / (+this.tempValue ? +this.tempValue : 1);
        break;

      default:
        this.result = +this.tempValue;
        break;
    }
  }
}

export enum operator_status {
  'typing',
  'result',
  'sum',
  'subtract',
  'multiply',
  'devide'
}

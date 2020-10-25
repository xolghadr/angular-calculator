import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.scss']
})
export class BtnComponent implements OnInit {

  constructor() { }
  @Input() digit: string;
  @Input() status = 'info';
  @Output() userClick = new EventEmitter<string>();

  ngOnInit(): void {
  }

  clicked(): void {
    this.userClick.emit(this.digit);
  }
}

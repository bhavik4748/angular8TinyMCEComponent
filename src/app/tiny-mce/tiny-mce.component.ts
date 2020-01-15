import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tiny-mce',
  templateUrl: './tiny-mce.component.html',
  styleUrls: ['./tiny-mce.component.scss']
})
export class TinyMCEComponent implements OnInit {
  @Input() PData: string;
  @Input() elementId: string;
  @Output() childEvent = new EventEmitter();
  dataModel: string = 'asdf';


  constructor() { }

  ngOnInit() {

  }

  ngAfterViewInit() {

  }
  onChange(value) {
    this.childEvent.emit(value);
  }

}

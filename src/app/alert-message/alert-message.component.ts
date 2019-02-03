import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'alert-message',
  templateUrl: './alert-message.component.html',
  styleUrls: ['./alert-message.component.css']
})
export class AlertMessageComponent implements OnInit {
  @Input() alert: string;

  constructor() { }

  ngOnInit() {
    console.error(alert);
  }

  close() {
    this.alert = null;
  }

}

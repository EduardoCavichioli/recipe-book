import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Recipe Book';
  isCollapsed: boolean;

  ngOnInit() {
    this.isCollapsed = true;
  }

  onCollapse() : void {
    this.isCollapsed = !this.isCollapsed;
  }
}

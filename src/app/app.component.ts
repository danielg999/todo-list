import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public config: { [key: string]: string } | null = null;

  constructor(){
    setTimeout(() => {
      this.config = {
        title: 'Lista zadań'!,
        footer: '© Lista zadań, All rights reserved.'!,
        date: new Date().toDateString()
      };
    }, 500);
  }
}

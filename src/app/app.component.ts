import { Component } from '@angular/core';
import { Task } from './task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  config: { [key: string]: string } | null = null;
  tasks: Task[] = [
    {
      name: 'Workout',
      deadline: '2022-01-21',
      done: false
    },
    {
      name: 'Learning Angular',
      deadline: '2022-01-21',
      done: false
    },
    {
      name: 'Meditate',
      deadline: '2022-01-21',
      done: false
    }
  ];

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

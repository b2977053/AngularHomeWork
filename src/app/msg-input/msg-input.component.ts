import { Component, ElementRef, OnInit, ViewChild, inject } from '@angular/core';
import { TasksService } from 'Services/tasks.service';

@Component({
  selector: 'app-msg-input',
  template: `
    <input type="text" placeholder="What needs to be done?"
    (keydown.enter)="entetInput($event)"
    >
  `,
  styles: ['input {width: 100%;}'  ]
})
export class MsgInputComponent {
  _tasks = inject(TasksService);


  entetInput($event: Event){
    let elInput = ($event.target as HTMLInputElement);
    this._tasks.push(elInput.value);
    elInput.value = '';
  }
}

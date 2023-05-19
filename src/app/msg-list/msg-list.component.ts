import { Component, ElementRef, OnInit, ViewChild, inject } from '@angular/core';
import { TasksService } from 'Services/tasks.service';
import { Message } from 'Services/Models/message';
import { Status } from 'Services/Models/status';

@Component({
  selector: 'app-msg-list',
  template: `
  <div *ngFor="let item of _tasks.getList('1', statusActive);let i = index"
  (mouseenter)="msgItemMouseEnter($event)"
  (mouseleave)="msgItemMouseLeave($event)"
  >
    {{item.msgContent}} - {{item.msgStatus}}
    <input type="button" value="X" (click)="msgCancle(item.id)" style="display: none;">
  </div>
  `,
  styles: [
  ]
})
export class MsgListComponent implements OnInit {
  _tasks = inject(TasksService);

  statusActive = Status.Active;
  ngOnInit(): void {

  }

  msgCancle(id: number) {
    console.log(id)
    this._tasks.cancel(id);
  }

  msgItemMouseEnter($event: MouseEvent) {
    let elDiv = ($event.target as HTMLInputElement);
    let elInput = elDiv .getElementsByTagName('input')[0]
    elInput.style.display = 'initial';
  }
  msgItemMouseLeave($event: MouseEvent) {
    let elDiv = ($event.target as HTMLInputElement);
    let elInput = elDiv .getElementsByTagName('input')[0]
    elInput.style.display = 'none';
  }
}

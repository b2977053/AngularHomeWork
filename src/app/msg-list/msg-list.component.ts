import { Component, ElementRef, OnInit, ViewChild, inject } from '@angular/core';
import { TasksService } from 'Services/tasks.service';
import { Message } from 'Services/Models/message';
import { Status } from 'Services/Models/status';

@Component({
  selector: 'app-msg-list',
  template: `
  <div *ngFor="let item of _tasks.getList();let i = index">
    {{item.msgContent}} - {{item.msgStatus}}
    <input type="button" value="X" (click)="msgCancle(i)">
  </div>
  `,
  styles: [
  ]
})
export class MsgListComponent implements OnInit  {
  _tasks = inject(TasksService);

  ngOnInit(): void {

  }

  msgCancle(index: number){
    this._tasks.cancel(index);
  }
}

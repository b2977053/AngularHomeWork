import { Component, ElementRef, OnInit, ViewChild, inject } from '@angular/core';
import { TasksService } from 'Services/tasks.service';
import { Message } from 'Services/Models/message';
import { Status } from 'Services/Models/status';

@Component({
  selector: 'app-msg-list',
  template: `
  <div *ngFor="let item of _tasks.getList()">
    {{item.msgContent}}
  </div>
  `,
  styles: [
  ]
})
export class MsgListComponent implements OnInit  {
  _tasks = inject(TasksService);

  ngOnInit(): void {

  }
}

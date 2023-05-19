import { Component, ElementRef, OnInit, ViewChild, inject } from '@angular/core';
import { TasksService } from 'Services/tasks.service';

@Component({
  selector: 'app-msg-info',
  template: `
    Message Count : {{ _tasks.getList().length }}
  `,
  styles: [
  ]
})
export class MsgInfoComponent {
  _tasks = inject(TasksService);

  msgCount:number = 0;
  ngOnInit(): void {
    this.msgCount = this._tasks.getList().length;
  }

}

import { Component, ElementRef, OnInit, ViewChild, inject } from '@angular/core';
import { TasksService } from 'Services/tasks.service';
import { Status } from 'Services/Models/status';

@Component({
  selector: 'app-msg-info',
  template: `
    Message Count : {{ _tasks.getList('1', statusActive).length }}
  `,
  styles: [
  ]
})
export class MsgInfoComponent {
  _tasks = inject(TasksService);

  statusActive = Status.Active;
  ngOnInit(): void {
  }

}

import { Component, ElementRef, OnInit, ViewChild, inject } from '@angular/core';
import { TasksService } from 'Services/tasks.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[TasksService]
})
export class AppComponent implements OnInit  {
  title = 'AngularHomeWork';
  _tasks = inject(TasksService);

  constructor(){  }

  msgCount:number = 0;
  ngOnInit(): void {
    this._tasks.push("123");
    this._tasks.push("456");
    this._tasks.push("789");

    this.msgCount = this._tasks.getList().length;
  }
}

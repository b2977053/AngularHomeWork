import { Injectable } from '@angular/core';
import { Message } from './Models/message';
import { Status } from "./Models/status";

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private taskIndex = 0;
  private messages: Message[] = [];

  // 新增
  push(arg0: string, user: string = '1') {
    this.messages.push({
      id: this.taskIndex++,
      user: user,
      msgContent: arg0,
      msgStatus: Status.Active
    });
  }

  // 取得清單
  getList(user: string = '1',
  msgStatus: Status = Status.None){
    return this.messages.filter(message => {
      // 篩選條件
      return (
        (message.user === user) &&
        (message.msgStatus === msgStatus)
      );
    });
  }

  // 作廢
  cancel(id: number){
    this.messages = this.messages.map(d=>{
      if (d.id === id) {
        d.msgStatus = Status.Cancel;
      }
      return d;
    });
  }

  constructor() { }
}

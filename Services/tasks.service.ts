import { Injectable } from '@angular/core';
import { Message } from './Models/message';
import { Status } from "./Models/status";

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private messages: Message[] = [];

  // 新增
  push(arg0: string) {
    this.messages.push({
      user: '1',
      msgContent: arg0,
      msgStatus: Status.OnGo
    });
  }

  // 取得清單
  getList(){

    return this.messages;
  }

  // 作廢
  cancel(index: number){
    this.messages[index].msgStatus = Status.Cancel;
  }

  constructor() { }
}

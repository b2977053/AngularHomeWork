import { Status } from "./status";

export interface Message {
  id: number,
  user:string,
  msgContent:string,
  msgStatus: Status,
}

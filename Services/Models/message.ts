import { Status } from "./status";

export interface Message {
  user:string,
  msgContent:string,
  msgStatus: Status,
}

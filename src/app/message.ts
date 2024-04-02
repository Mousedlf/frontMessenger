import {Profile} from "./profile";

export interface Message {
  id:number,
  author:Profile,
  content: string,
  createdAt: string
}

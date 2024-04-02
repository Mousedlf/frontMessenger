import {inject, Injectable} from '@angular/core';
import {Conversation} from "./conversation";
import {Globals} from "../globals";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private http = inject(HttpClient)

  deleteMessage(id:number, convId:number){
    console.log(Globals.baseUrl+"/private/conversation/"+convId+"/delete/"+id)

    return this.http.delete(Globals.baseUrl+"/private/conversation/"+convId+"/delete/"+id)
  }

}

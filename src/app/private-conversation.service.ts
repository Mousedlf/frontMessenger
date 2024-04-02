import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Globals} from "../globals";
import {Conversation} from "./conversation";

@Injectable({
  providedIn: 'root'
})
export class PrivateConversationService {

  private http = inject(HttpClient)

  getConversations(){
    return this.http.get<Conversation>(Globals.baseUrl+"/private/conversations")
    }

  getConversationById(id:number){
    return this.http.get<Conversation>(Globals.baseUrl+"/private/conversation/"+id)
  }

}

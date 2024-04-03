import {inject, Injectable} from '@angular/core';
import {Globals} from "../globals";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private http = inject(HttpClient)

  deleteMessage(id:number, convId:number){
    return this.http.delete(Globals.baseUrl+"/private/conversation/"+convId+"/delete/"+id)
  }

  newMessage(data:{}, convId:number){
    return this.http.post(Globals.baseUrl+"/private/conversation/"+convId+"/message/new",data)
  }

  editMessage(id:number, convId:number, data:any){
    return this.http.put(Globals.baseUrl+"/private/conversation/"+convId+"/edit/"+id, data)
  }

}

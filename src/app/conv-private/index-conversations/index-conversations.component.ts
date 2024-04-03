import {booleanAttribute, Component, EventEmitter, inject, Output} from '@angular/core';
import {PrivateConversationService} from "../../private-conversation.service";
import {Conversation} from "../../conversation";
import {NgClass, NgForOf, NgIf} from "@angular/common";
import {Globals} from "../../../globals";

@Component({
  selector: 'app-index-conversations',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    NgClass
  ],
  templateUrl: './index-conversations.component.html',
  styleUrl: './index-conversations.component.css'
})
export class IndexConversationsComponent {

  service = inject(PrivateConversationService)
  conversations: Conversation[] = []


  constructor() {
    this.getAllConversationsOfUser()
    //console.log(this.conversations)
  }

  getAllConversationsOfUser(){
    this.service.getConversations().subscribe({
      next:(allConv: any)=>{
        for(let i=0; i<allConv.length;i++){
          let chat:Conversation={
            id:allConv[i].id,
            participantA:allConv[i].participantA,
            participantB:allConv[i].participantB
          }
          if(Globals.currentUserId == chat.participantA.id.toString() || Globals.currentUserId == chat.participantB.id.toString()){
            this.conversations.push(chat)
          }
        }
      }
    })
    // console.log('method '+this.conversations)
  }

  protected readonly Globals = Globals;

  @Output() dataEvent = new EventEmitter<number>()

  test(id:any){
    this.dataEvent.emit(id)
    //console.log("lala")

  }
}

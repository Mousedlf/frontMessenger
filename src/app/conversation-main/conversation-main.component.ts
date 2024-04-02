import {Component, inject, Input} from '@angular/core';
import {FormRegisterComponent} from "../auth/form-register/form-register.component";
import {FormLoginComponent} from "../auth/form-login/form-login.component";
import {ConversationComponent} from "../conv-private/conversation/conversation.component";
import {IndexConversationsComponent} from "../conv-private/index-conversations/index-conversations.component";
import {RouterOutlet} from "@angular/router";
import {Message} from "../message";
import {PrivateConversationService} from "../private-conversation.service";
import {Globals} from "../../globals";
import {Profile} from "../profile";

@Component({
  selector: 'app-conversation-main',
  standalone: true,
  imports: [
    FormRegisterComponent,
    FormLoginComponent,
    ConversationComponent,
    IndexConversationsComponent,
    RouterOutlet
  ],
  templateUrl: './conversation-main.component.html',
  styleUrl: './conversation-main.component.css'
})
export class ConversationMainComponent {

  service = inject(PrivateConversationService)
  messages: Message[]=[]
  otherParticipantName: string = ""
  convId ?:number



  getMessagesByConvId(id:any){
    this.service.getConversationById(id).subscribe({
      next: (allMsgs: any) => {
        this.messages = []
        for (let i = 0; i < allMsgs.length; i++) {
          let message: Message = {
            id: allMsgs[i].id,
            author: allMsgs[i].author,
            content: allMsgs[i].content,
            createdAt: allMsgs[i].createdAt
          }
          this.messages.push(message)
        }
      }
    })
  }

  receiveConversation($event:any){
    this.getMessagesByConvId($event.id)
    this.convId = $event.id

    if($event.participantB.id != Globals.currentUserId){
      this.otherParticipantName = ""
      this.otherParticipantName = $event.participantB.username

    } else if($event.participantA.id != Globals.currentUserId){
      this.otherParticipantName = ""
      this.otherParticipantName = $event.participantA.username

    }

    //console.log("id recup "+$event.id)
    //console.log(this.messages)
  }


  protected readonly Globals = Globals;
}

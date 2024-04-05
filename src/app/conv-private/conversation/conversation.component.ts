import {Component, inject, Input} from '@angular/core';

import {PrivateConversationService} from "../../private-conversation.service";
import {Message} from "../../message";
import {Globals} from "../../../globals";
import {NgClass, NgForOf, NgIf} from "@angular/common";
import {MessageService} from "../../message.service";
import {FormsModule, NgForm} from "@angular/forms";

@Component({
  selector: 'app-conversation',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    NgClass,
    FormsModule
    ,
  ],
  templateUrl: './conversation.component.html',
  styleUrl: './conversation.component.css'
})
export class ConversationComponent {

  @Input() messages : Message[]= []
  @Input() test: string = ""
  @Input() convId ?:any


  service = inject(PrivateConversationService)
  messageService = inject(MessageService)


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


  delete(id:number){
    this.messageService.deleteMessage(id, this.convId).subscribe({
      next:(response)=>{
        console.log(response)
        this.getMessagesByConvId(this.convId)
      }

    })
  }


  send(input:string){
    let data= {"content": input, "associatedImages": []}
    this.messageService.newMessage(data, this.convId).subscribe({
      next:(response)=>{
        console.log(response)
        this.getMessagesByConvId(this.convId)
        // clear input !!
      }
    })
  }


  edit(content:string){



    //let data = {"content":editedMsg}
    //this.messageService.editMessage(id, this.convId, data)
  }




  protected readonly Globals = Globals;
}

import {Component, inject, Input} from '@angular/core';
import {ConversationNavComponent} from "../conversation-nav/conversation-nav.component";
import {ConversationInputComponent} from "../conversation-input/conversation-input.component";
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
    ConversationNavComponent,
    ConversationInputComponent,
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



  constructor() {}

  delete(id:number){
    this.messageService.deleteMessage(id, this.convId).subscribe({
      next:(response)=>{
        console.log(response)
      }
    })
    //reload messages
  }


  send(input:string){

    let data= {"content": input, "associatedImages": []}
    this.messageService.newMessage(data, this.convId).subscribe({
      next:(response)=>{
        console.log(response)
      }
    })
    // reload messages
  }

  edit(content:string){



    //let data = {"content":editedMsg}
    //this.messageService.editMessage(id, this.convId, data)
  }




  protected readonly Globals = Globals;
}

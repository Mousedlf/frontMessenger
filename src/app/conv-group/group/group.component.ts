import { Component } from '@angular/core';
import {ConversationComponent} from "../../conv-private/conversation/conversation.component";
import {IndexConversationsComponent} from "../../conv-private/index-conversations/index-conversations.component";
import {IndexGroupConversationsComponent} from "../index-group-conversations/index-group-conversations.component";

@Component({
  selector: 'app-group',
  standalone: true,
  imports: [
    ConversationComponent,
    IndexConversationsComponent,
    IndexGroupConversationsComponent
  ],
  templateUrl: './group.component.html',
  styleUrl: './group.component.css'
})
export class GroupComponent {

}

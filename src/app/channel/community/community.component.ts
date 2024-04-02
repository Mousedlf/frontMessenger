import { Component } from '@angular/core';
import {ConversationComponent} from "../../conv-private/conversation/conversation.component";
import {IndexConversationsComponent} from "../../conv-private/index-conversations/index-conversations.component";
import {IndexCommunitiesComponent} from "./index-communities/index-communities.component";

@Component({
  selector: 'app-community',
  standalone: true,
  imports: [
    ConversationComponent,
    IndexConversationsComponent,
    IndexCommunitiesComponent
  ],
  templateUrl: './community.component.html',
  styleUrl: './community.component.css'
})
export class CommunityComponent {

}

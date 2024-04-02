import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-conversation-nav',
  standalone: true,
  imports: [],
  templateUrl: './conversation-nav.component.html',
  styleUrl: './conversation-nav.component.css'
})
export class ConversationNavComponent {

@Input() otherParticipant: string=""

}

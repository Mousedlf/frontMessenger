import {Component, inject} from '@angular/core';
import {Globals} from "../../../globals";
import {RequestService} from "../../request.service";
import {FriendService} from "../../friend.service";
import {Request} from "../../request";
import {Profile} from "../../profile";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

    protected readonly Globals = Globals;
    friendService = inject(FriendService)
    friends: Profile[]=[]

  constructor() {
    this.getFriendsOfUser()
  }

  getFriendsOfUser(){
      this.friendService.getFriendsOfUser().subscribe({
        next:(allFriends: any) =>{
          this.friends = []
          for(let i =0; i<allFriends.length;i++){
            let friend:Profile = {
              id:allFriends[i].id,
              username:allFriends[i].username,
              public:allFriends[i].public
            }
            this.friends.push(friend)
          }
        }
      })
  }





}

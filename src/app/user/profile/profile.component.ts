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
  profiles:Profile[]=[]

  constructor() {
    this.getFriendsOfUser()
    this.getAllProfiles()
  }



  getFriendsOfUser(){
      this.friendService.getFriendsOfUser().subscribe({
        next:(allFriends: any) =>{
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

  getAllProfiles(){
    this.friendService.getAllProfiles().subscribe({
      next:(allProfiles: any) =>{
        for(let i =0; i<allProfiles.length;i++){

          let profile:Profile = {
            id:allProfiles[i].id,
            username:allProfiles[i].username,
            public:allProfiles[i].public
          }

          // this.friends.forEach(item => {       VERIF SI PAS AMI pas fonctionnelle

          if(profile.id.toString() != Globals.currentUserId){
              this.profiles.push(profile)
             }
        }

      }
    })
  }



}

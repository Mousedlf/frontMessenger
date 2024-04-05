import {Component, inject} from '@angular/core';
import {Request} from "../../request";
import {RequestService} from "../../request.service";
import {NgForOf} from "@angular/common";
import {Profile} from "../../profile";
import {FriendService} from "../../friend.service";
import {Globals} from "../../../globals";

@Component({
  selector: 'app-index-requests',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './index-requests.component.html',
  styleUrl: './index-requests.component.css'
})
export class IndexRequestsComponent {

  reqService = inject(RequestService)
  requests: Request[]=[]
  friendService = inject(FriendService)
  profiles:Profile[]=[]
  friends:Profile[]=[]

  constructor() {
    this.getFriendRequests()
    this.getAllNonFriends()
    this.getFriendsOfUser()

  }

  getFriendRequests(){
    this.reqService.getRequests().subscribe({
      next:(allReq: any) =>{
        this.requests = []
        for(let i =0; i<allReq.length;i++){
          let req:Request = {
            id:allReq[i].id,
            ofProfile:allReq[i].ofProfile
          }
          this.requests.push(req)
        }
      }
    })
  }

  getAllNonFriends(){
    this.friendService.getAllProfiles().subscribe({
      next:(allProfiles: any) =>{
        this.profiles = []

        for(let i =0; i<allProfiles.length;i++){

          //reconstruct all profiles
          let profile:Profile = {
            id:allProfiles[i].id,
            username:allProfiles[i].username,
            public:allProfiles[i].public
          }

          //exclude current user (and friends but does not work) then push profiles to array
          if(profile.id.toString() != Globals.currentUserId ){ //|| !this.friends.includes(profile
            this.profiles.push(profile)
          }


        }
      }
    })
  }

  sendRequest(id:number){
    this.reqService.sendRequest(id).subscribe({
      next:(response)=>{
        console.log(response)
      }
    })
  }

  acceptRequest(id:number){
    this.reqService.acceptRequest(id).subscribe({
      next:(response)=>{
        console.log(response)
      }
    })
    //recharger requests[] et pop up acceptée
  }

  declineRequest(id:number){
    this.reqService.declineRequest(id).subscribe({
      next:(response)=>{
        console.log(response)
      }
    })
    //recharger requests[] et pop up declinée
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

}}

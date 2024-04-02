import {Component, inject} from '@angular/core';
import {Request} from "../../request";
import {RequestService} from "../../request.service";
import {NgForOf} from "@angular/common";
import {Profile} from "../../profile";

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

  constructor() {
    this.getFriendRequests()
  }

  getFriendRequests(){
    this.reqService.getRequests().subscribe({
      next:(allReq: any) =>{
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



}

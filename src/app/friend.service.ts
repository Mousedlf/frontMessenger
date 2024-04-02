import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Globals} from "../globals";
import {Profile} from "./profile";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FriendService {

  constructor(private http: HttpClient) {}

  getFriendsOfUser(){
      return this.http.get<Profile[]>(Globals.baseUrl+"/"+Globals.currentUser.id+"/friends");
  }

  getAllProfiles():Observable<Profile[]>{
    return this.http.get<Profile[]>(Globals.baseUrl+"/profiles")
  }

}

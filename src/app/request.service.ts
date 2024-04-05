import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Globals} from "../globals";
import {Profile} from "./profile";
import {Request} from "./request";

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http: HttpClient) {}

  getRequests(): Observable<Request[]> {
    return this.http.get<Request[]>(Globals.baseUrl+`/friend/request/received/`+Globals.currentUserId);
  }

  sendRequest(id:number) {
    return this.http.post<Request>(Globals.baseUrl+"/friend/request/send/"+ id, [])
  }

  acceptRequest(id:number) {
    return this.http.post<Request>(Globals.baseUrl+"/friend/accept/"+ id, [])
  }

  declineRequest(id:number) {
    return this.http.post<Request>(Globals.baseUrl+"/friend/decline/"+ id, [])
  }


}

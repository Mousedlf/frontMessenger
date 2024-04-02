import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Globals} from "../globals";
import {Profile} from "./profile";

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http: HttpClient) {}

  getRequests(): Observable<Request[]> {
    return this.http.get<Request[]>(Globals.baseUrl+`/friend/request/received/`+Globals.currentUser.id);
  }


}

import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {Globals} from "../globals";
import {Profile} from "./profile";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private http = inject(HttpClient)
  private router = inject(Router)

  login(object: any) {
    this.http.post<any>(Globals.baseUrl+"/login_check", object).subscribe({
      next:(response:any)=>{
        localStorage.setItem("Token", response["token"])
        // location.reload()
        // this.router.navigate(["/private"])

      }})
    console.log("ouin")


    if(Globals.isLoggedIn()){
      this.http.get<any>(Globals.baseUrl+"/profile/actual").subscribe({
        next:(res:Profile) =>{
          Globals.currentUser = {
            id: res.id,
            username: res.username,
            public: res.public
          }
          localStorage.setItem("CurrentUserId", res.id.toString())
          console.log(res)
        }})
      console.log("currentUser")
    }

    //this.router.navigate(['/private'])

  }

  logout(){
    localStorage.removeItem("Token")
    this.router.navigate(["/login"])
    location.reload()
  }
}

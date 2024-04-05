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

  register(object:any){
    this.http.post<any>("https://messenger.dlfcaroline.online/register",object).subscribe({
      next: (response: Response) => {
        console.log(response)
        this.router.navigateByUrl('/login');
      }
    })
  }


  login(object: any) {
    this.http.post<any>(Globals.baseUrl+"/login_check", object).subscribe({
      next:(response:any)=>{
        localStorage.setItem("Token", response["token"])
      }})


    // REVOIR ! double click necessaire

    if(Globals.isLoggedIn()){
      this.http.get<any>(Globals.baseUrl+"/profile/actual").subscribe({
        next:(res:Profile) =>{
          Globals.currentUser = {
            id: res.id,
            username: res.username,
            public: res.public
          }
          localStorage.setItem("CurrentUserId", res.id.toString())
          localStorage.setItem("CurrentUserUsername", res.username)
          console.log(res)
        }})
    }

    //this.router.navigate(['/private'])

  }

  logout(){
    localStorage.removeItem("Token")
    this.router.navigate(["/login"])
    location.reload()
  }
}

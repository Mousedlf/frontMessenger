import {Profile} from "./app/profile";

export class Globals {
  public static baseUrl = "https://messenger.dlfcaroline.online/api";
  public static token: string|null = localStorage.getItem("Token");
  public static currentUser: Profile
  public static currentUserId: string|null = localStorage.getItem("CurrentUserId") //solution temp

  public static isLoggedIn(){
    return localStorage.getItem("Token") != null
  }

}

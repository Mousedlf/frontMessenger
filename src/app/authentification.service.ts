import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  private http = inject(HttpClient)


}

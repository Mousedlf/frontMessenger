import {Component, inject} from '@angular/core';
import {RouterLink} from "@angular/router";
import {Globals} from "../../globals";
import {LoginService} from "../login.service";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  protected readonly Globals = Globals;
  loginService = inject(LoginService)
}

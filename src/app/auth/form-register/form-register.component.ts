import {Component, inject} from '@angular/core';
import {FormsModule, NgForm} from "@angular/forms";
import {LoginService} from "../../login.service";

@Component({
  selector: 'app-form-register',
  standalone: true,
    imports: [
        FormsModule
    ],
  templateUrl: './form-register.component.html',
  styleUrl: './form-register.component.css'
})
export class FormRegisterComponent {

  private service = inject(LoginService);


  onSubmit(form: NgForm) {
    this.service.register(form.value)
  }


}

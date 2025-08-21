import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { RegisterService } from '../../services/register.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  private fb = inject(FormBuilder)
  private auth = inject(RegisterService)

  form = this.fb.group({})

  onSubmit(){}

}

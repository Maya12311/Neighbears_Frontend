import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RegisterService } from '../../services/register.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {

   registerForm! : FormGroup;
   auth = inject(RegisterService)

constructor(private formBuilder: FormBuilder){}

  ngOnInit(): void {


    this.registerForm = this.formBuilder.group({
    userName : ['', Validators.required],
    password: ['', Validators.required]
  })
  }
  onSubmit(){}

}

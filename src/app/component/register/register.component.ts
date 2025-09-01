import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RegisterService } from '../../services/register.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {

   registerForm! : FormGroup;
   auth = inject(RegisterService)
  submitted: boolean= false;
constructor(private formBuilder: FormBuilder){}

  ngOnInit(): void {


    this.registerForm = this.formBuilder.group({
    userName : ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    telefonNumber: ['', Validators.required],
    password: ['', Validators.required],
    address: this.formBuilder.group({
      street: ['', Validators.required],
      houseNumber: [],
      zipCode: [],
      city: []
    })
  })
  }



  onSubmit(){
    console.log('submitted form : ', this.registerForm.value);
    console.log(this.registerForm.valid)
  }

}

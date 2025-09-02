import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RegisterService } from '../../services/register.service';
import { RegistrationRequest } from '../../model/Registration';
import { User } from '../../model/user';
import { Address } from '../../model/address';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {

   registerForm! : FormGroup;
   auth = inject(RegisterService)
  submitted: boolean= false;
  user = new User();
  address = new Address();
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
    this.user.name=  this.registerForm.value.userName;
    this.user.email = this.registerForm.value.email;
    this.user.mobileNumber = this.registerForm.value.telefonNumber;
    this.user.password = this.registerForm.value.password;

    this.address.city = this.registerForm.value.city;
    this.address.houseNumber = this.registerForm.value.houseNumber;
    this.address.street = this.registerForm.value.street;
    this.address.zipCode = this.registerForm.value.zipCode;

    const registrationPayload = new RegistrationRequest();
    registrationPayload.user = this.user;
    registrationPayload.address = this.address;

    console.log(registrationPayload.user)
    console.log(registrationPayload.address)



  }

}

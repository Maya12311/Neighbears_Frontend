import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RegisterService } from '../../services/register.service';
import { RegistrationRequest } from '../../model/Registration';
import { User } from '../../model/user';
import { Address } from '../../model/address';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {

   registerForm! : FormGroup;
   adressPart! : FormGroup;
   auth = inject(RegisterService)
  submitted: boolean= false;
  user = new User();
  address = new Address();
constructor(private formBuilder: FormBuilder, private registerService: RegisterService, private router: Router){}

  ngOnInit(): void {


    this.registerForm = this.formBuilder.group({
    userName : ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    telefonNumber: ['', Validators.required],
    password: ['', Validators.required],
    addressPart: this.formBuilder.group({
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
    this.user.pwd = this.registerForm.value.password;

    this.address.city = this.registerForm.value.addressPart.city
    this.address.houseNumber = this.registerForm.value.addressPart.houseNumber
    this.address.street = this.registerForm.value.addressPart.street;
    this.address.zipCode = this.registerForm.value.addressPart.zipCode;


    const registrationPayload = new RegistrationRequest();
    registrationPayload.customerDTO = this.user;
    registrationPayload.addressDTO = this.address;

    console.log(registrationPayload.customerDTO)
    console.log("this is the blu address",registrationPayload.addressDTO)

    this.submitted = true;


    this.registerService.registerUserWithAddress(registrationPayload).subscribe(
      responseData => {

        console.log("Registrierung erfolgreich", 'OK')
        this.router.navigate(['/profile'])

      },
      error => {
       console.log("thats the error message ", error.message)
        }

    )

  }

}

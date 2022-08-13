import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  form = new FormGroup({
    usuario:  new FormControl('', [ Validators.required ]),
    nombres: new FormControl('', [ Validators.required]),
    apellidos: new FormControl('', [ Validators.required]),
    tipoDeIdentificacion: new FormControl('', [ Validators.required ]),
    numDeIdentificacion: new FormControl('', [ Validators.required ]),
    fechaDeNacimiento: new FormControl('', [ Validators.required ]),
    contrasenna: new FormControl('', [ Validators.required ])
  });

  constructor(
    public userService: UserService,
    private router: Router,
  ) {

   }

  ngOnInit(): void {

  }

  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.form.value);
    this.userService.create(this.form.value).subscribe(res => {
         console.log('User created successfully!');
         this.router.navigateByUrl('user/index');
    })
  }

}


import { Component, OnInit } from '@angular/core';

import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { User } from '../user';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  id : number;
  user:User;
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
    private route: ActivatedRoute,
    private router: Router
  ) {

  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['idUser'];
    this.userService.find(this.id).subscribe((data: User)=>{
      this.user = data;
      console.log(this.user)
      });



  }

  submit(){
    console.log(this.form.value);
    this.userService.update(this.id, this.form.value).subscribe(res => {
         console.log('User updated successfully!');
         this.router.navigateByUrl('user/index');
    })
  }

}

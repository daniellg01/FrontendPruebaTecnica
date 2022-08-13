
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { UserService } from '../user.service';
import { AuthService } from 'src/app/auth.service';
import { User } from '../user';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnDestroy, OnInit {
  dtOptions: DataTables.Settings = {};
  // We use this trigger because fetching the list of persons can be quite long,
  // thus we ensure the data is fetched before rendering
  dtTrigger: Subject<any> = new Subject<any>();
  users: User[] = [];
  // constructor() { }
  constructor(public userService: UserService,public AuthService:AuthService) { }
logOut(){
  this.AuthService.logout();
}
  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      language:{
        url:'//cdn.datatables.net/plug-ins/1.10.21/i18n/Spanish.json'
      }
    };
    this.userService.getAll().subscribe((data: User[])=>{

      this.users = data;
      this.dtTrigger.next(this.dtOptions);
      console.log(this.users);

    })
  }

  deletePerson(id:number){
    this.userService.delete(id).subscribe(res => {
         this.users = this.users.filter(item => item.id !== id);
         console.log('User deleted successfully!');
    })
  }
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
}

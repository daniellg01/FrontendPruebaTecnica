import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { IndexComponent } from './index/index.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { DataTablesModule } from "angular-datatables";
import { ViewComponent } from './view/view.component';
@NgModule({
  declarations: [
    CreateComponent,
    EditComponent,
    IndexComponent,
    ViewComponent
  ],
  imports: [
    CommonModule,
    DataTablesModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot()
  ]
})
export class UserModule { }

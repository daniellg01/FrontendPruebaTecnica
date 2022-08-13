import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './user/index/index.component';
import { CreateComponent } from './user/create/create.component';
import { EditComponent } from './user/edit/edit.component';
import { AuthGuard } from './services/auth.guard';
import { ViewComponent } from './user/view/view.component';
const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component:LoginComponent},
  { path: 'user/index', canActivate:[AuthGuard],component: IndexComponent },
  { path: 'user/create', canActivate:[AuthGuard],component: CreateComponent },
  { path: 'user/edit/:idUser', canActivate:[AuthGuard],component: EditComponent },
  { path: 'user/view/:idUser', canActivate:[AuthGuard],component: ViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

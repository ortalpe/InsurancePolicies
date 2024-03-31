import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './users/user-list.component';
import { PolicyListComponent } from './policies/policy-list.component';
import { UserDetailsComponent } from './users/user-details.component';

const routes: Routes = [
  //{ path: '', redirectTo: '/users', pathMatch: 'full' },
  { path: 'allusers', component: UserListComponent },
  { path: 'policies', component: PolicyListComponent },
  { path: 'users', component: UserDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

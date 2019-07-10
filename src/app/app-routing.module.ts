import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './commons/home/home.component';
import { MemberListComponent } from './member/member-list/member-list.component';
import { MemberComponent } from './member/member/member.component';
import { NotfoundComponent } from './commons/notfound/notfound.component';
import { MemberAddComponent } from './member/member-add/member-add.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home', component: HomeComponent},
  {path:'members', component: MemberListComponent },
  {path:'members/:id', component: MemberComponent},
  {path:'addMember', component: MemberAddComponent},
  {path:'**', component: NotfoundComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

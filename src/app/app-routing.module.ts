import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminSettingComponent } from './components/admin-setting/admin-setting.component';
import { AuthTabsComponent } from './components/auth/auth-tabs/auth-tabs.component';
import { AuthGuard } from './components/auth/auth.guard';
import { ChatComponent } from './components/chat/chat.component';
import { PeopleComponent } from './components/people/people.component';


const routes: Routes = [
  { path: 'auth', component: AuthTabsComponent },

  { path: '', redirectTo: '/auth', pathMatch: 'full' },

  {
    path: 'people',
    component: PeopleComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'chat/:userId',
    component: ChatComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'setting',
    component: AdminSettingComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

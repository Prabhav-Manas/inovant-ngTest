import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { FaqsComponent } from './faqs/faqs.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AuthGuard } from './auth/auth.guard';
import { LogInGuard } from './auth/login.guard';

const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'login', component:LoginComponent, canActivate:[LogInGuard]},
  {path:'my-account', component:MyAccountComponent, canActivate: [AuthGuard], children:[
    {path:'', redirectTo:'edit-profile', pathMatch:'full'},
    {path:'edit-profile', component:EditProfileComponent},
    {path:'faqs',component:FaqsComponent},
    {path:'contact-us', component:ContactUsComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

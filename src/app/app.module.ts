import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { LoginComponent } from './auth/login/login.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { FaqsComponent } from './faqs/faqs.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AuthInterceptor } from './auth/auth-interceptor';
import { NgxLoadingModule } from 'ngx-loading';

@NgModule({
  declarations: [
    AppComponent,
    MyAccountComponent,
    LoginComponent,
    EditProfileComponent,
    FaqsComponent,
    ContactUsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgxLoadingModule.forRoot({})
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS, useClass:AuthInterceptor, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

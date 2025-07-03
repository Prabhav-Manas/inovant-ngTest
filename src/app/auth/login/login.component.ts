import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../appServices/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  hide:string='password';
  loginForm:any=FormGroup;
  loading:boolean=false;

  constructor(private fb:FormBuilder, private _authService:AuthService, private router:Router){
    this.loginForm=this.fb.group({
      email:new FormControl('', [Validators.required, Validators.email]),
      password:new FormControl('',[Validators.required])
    })
  }

  ngOnInit(): void {
    
  }

  Space(event: any) {
    console.log(event);
    console.log(event.target.selectionStart);
    if (event.code === 'Space' || event.key === ' ') {
      event.preventDefault();
    }
  }

  onSubmit(){
    const {email, password}=this.loginForm.value;

    if(this.loginForm.valid){
      console.log('Login Form value:=>', this.loginForm.value);
      this.loading=true;

      this._authService.login(email, password).subscribe((res:any)=>{
        this.loading=false;

        if(res.status===1){
          console.log('Login Successful:=>', res);
          localStorage.setItem('sessionToken', res.data.sessionToken);
          this.router.navigate(['/my-account']);
        }
      }, (error:any)=>{
        this.loading=false;
        console.log('Login Failed:=>', error);  
      })
    }
    this.loginForm.reset();
  }
}

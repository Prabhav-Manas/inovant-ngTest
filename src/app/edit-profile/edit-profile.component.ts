import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit{
  editProfileForm:any=FormGroup;
  hide:string='password';
  nePassHide:string='password';
  conNewPassHide:string='password';

  constructor(private fb:FormBuilder){
    this.editProfileForm=this.fb.group({
      firstName:new FormControl('', [Validators.required]),
      lastName:new FormControl('', [Validators.required]),
      email:new FormControl('', [Validators.required]),
      countryCode:new FormControl('', [Validators.required]),
      phone:new FormControl('', [Validators.required]),
      oldPassword:new FormControl('', [Validators.required]),
      newPassword:new FormControl('', [Validators.required]),
      confirmNewPassword:new FormControl('', [Validators.required])
    }, {validators:this.passwordMatchValidator})
  }

  ngOnInit(): void {
    
  }

  passwordMatchValidator(formGroup: FormGroup) {
    const newPassword = formGroup.get('newPassword')?.value;
    const confirmNewPassword = formGroup.get('confirmNewPassword')?.value;

    if (newPassword !== confirmNewPassword) {
      formGroup.get('confirmNewPassword')?.setErrors({ mismatch: true });
      return { mismatch: true };
    } else {
      const confirmCtrl = formGroup.get('confirmNewPassword');
      if (confirmCtrl?.hasError('mismatch')) {
        confirmCtrl.setErrors(null);
      }
      return null;
    }
  }

  Space(event: any) {
    console.log(event);
    console.log(event.target.selectionStart);
    if (event.code === 'Space' || event.key === ' ') {
      event.preventDefault();
    }
  }

  onSubmit(){
    if(this.editProfileForm.valid){
      console.log(this.editProfileForm.value);
    }
    this.editProfileForm.reset();
  }
}

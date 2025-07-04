import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit{
  constructor(private router:Router){}

  ngOnInit(): void {
    
  }

  onLogout(){
    localStorage.removeItem('sessionToken');
    this.router.navigate(['/login']);
  }
}

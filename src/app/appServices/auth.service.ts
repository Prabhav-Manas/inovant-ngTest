import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'enviroments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl=environment.apriUrl;
  private authHeader='dAwMpo/TAWLhFrwwr3Wzcmc8XTdmAgp6zmGLsFmJ9HAnEbTQAg937i/hqKFjtFVQ4TnQ2y6xlVSeTKy3VWcxvalwvmPq6qF7+UcLd3wBXYoVQ2Puj49mTweKh/v2Rvj9zyVjfbexFkjMNZ5XyGucmdOI6XMmI98Zvu38Jh1fOo8157YxlgCozKkonixczjGIn3RKLuv7v3gXDRl4irzRcS6lYKGJB8vfA847GUppsVjdZV9bAjADfqUP2Iyl6Nz8MOWrSHNy8tWqhM6mI165rCwH3xMv7HEexmsMO7Mi36c=s';

  constructor(private http:HttpClient) { }

  login(email:string, password:string){
    const payload={
      email,
      phone: "",
      phoneCode: "965",
      password,
      deviceToken: "",
      deviceType: "",
      deviceModel: "",
      appVersion: "",
      osVersion: ""
    }

    const headers=new HttpHeaders({
      'auth':this.authHeader,
    });

    return this.http.post<any>(`${this.baseUrl}`, payload, {headers});
  }
}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../classes/user';

@Injectable({
  providedIn: 'root'
})
export class UserRequestService {

  constructor(private http: HttpClient) {
   
   }

   queryUser(query:string){
  
     let promise = new Promise((resolve, reject)=>{
       this.http.get<User>(environment.apiUrl+query,{headers: new HttpHeaders({'Authorization': 'token ' + environment.apiKey})}).toPromise().then((response) =>{
         resolve(response);
       }, error=>{
         reject(error);
       } );
     });
     return promise;
   }
}

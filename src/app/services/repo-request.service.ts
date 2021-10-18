import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RepoRequestService {

  queryRepo(query:string){

     return this.http.get<any>(environment.apiUrl+query,{headers: new HttpHeaders({'Authorization': 'token ' + environment.apiKey})}).toPromise();

  }

  constructor(private http: HttpClient) { }

}

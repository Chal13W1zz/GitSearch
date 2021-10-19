import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RepoRequestService {
  allRepos : any;

  queryRepo(query:string):any{
    this.allRepos = this.http.get<any>(environment.apiUrl+query,{headers: new HttpHeaders({'Authorization': 'token ' + atob(environment.apiKey)})}).toPromise();
    return this.allRepos;

  }

  constructor(private http: HttpClient) { }

}

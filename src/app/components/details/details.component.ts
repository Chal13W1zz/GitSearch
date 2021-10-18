import { Component, OnInit } from '@angular/core';
import { RepoRequestService } from 'src/app/services/repo-request.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
 
  userRepositories: any[] = [];

  constructor(private requestRepoService: RepoRequestService) { 
    //  this.userRepositories = requestRepoService;
    // this.requestRepoService.queryRepo(this.username)
  }

  ngOnInit(): void {
    // console.log(user)
   
    this.requestRepoService.allRepos.then((response: any)=>{
      this.userRepositories = response;
      console.log(response[1])
    },(error: any)=>{
      console.log(error)
    })
  
    // this.service.then((response: any) => {
    //   console.log("legit stuff",response)
    // },(error: any)=>{
    //   console.log(error)
    // })

   
    // console.log("0000000",this.service)
  }

}

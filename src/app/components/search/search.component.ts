import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/classes/user';
import { RepoRequestService } from 'src/app/services/repo-request.service';
import { UserRequestService } from 'src/app/services/user-request.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  title = 'GitSearch';
  found: boolean = false;
  repositories: any[] = [];
  user!: any;
  searchValue = new FormControl("")
  opshons = new FormGroup({
    queryFor: new FormControl("repo")
});



  search(value: string){
    // console.log(this.opshons.value.queryFor +value)
    if(this.opshons.value.queryFor == "username"){
      this.requestUserService.queryUser("users/"+value).then((response:any)=>{
        // console.log(response)
        this.found = true;
        this.user = response;
        // console.log(this.user.avatar)
        // this.user = response.avatar_url
        
        
        // this.user.username = response.avatar_url;
      },(error)=>{
        console.log(error)
        this.found = false;
      })

    }else if(this.opshons.value.queryFor == "repo"){
      this.requestRepoService.queryRepo("users/"+value+"/repos").then((response: any[])=>{
        this.repositories = response;
        // console.log(response[0].owner.avatar_url);
        // console.log(this.repositories)
        // this.requestRepoService.allRepos.then((response: any)=>{
        //   console.log(response)
        // })
        // console.log(this.requestRepoService.allRepos)
        

        this.router.navigate(['details']);
        
      }, (err: any)=>{
        console.log(err)
      })

    }else{
      alert("We don't do that here")
    }
  }

  constructor(private requestUserService:UserRequestService, private requestRepoService: RepoRequestService, private router: Router ) { }

  ngOnInit(): void {   
    // user: User = new User("","","","","","");   

  }


}

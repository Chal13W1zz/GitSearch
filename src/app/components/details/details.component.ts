import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RepoRequestService } from 'src/app/services/repo-request.service';
import { UserRequestService } from 'src/app/services/user-request.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  userRepositories: any[] = [];
  user: any;

  back() {
    this.router.navigate([''])
  }

  constructor(private requestRepoService: RepoRequestService, private router: Router, private requestUserservice: UserRequestService) {
  }

  ngOnInit(): void {
    this.requestRepoService.allRepos.then((response: any) => {
      this.userRepositories = response;

    }, (error: any) => {
      console.log(error)
    })

    this.requestUserservice.promise.then((response: any) => {
      this.user = response;
    }, (error: any) => {
      console.log(error)
    })

  }

  ngOnDestroy(): void {
    // this.router.navigate(['']);
  }

}

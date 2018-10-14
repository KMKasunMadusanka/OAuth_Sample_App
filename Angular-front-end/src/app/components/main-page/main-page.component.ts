import { Component, OnInit } from '@angular/core';
import { GitHubServiceService } from '../../services/git-hub-service.service'
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor(private _GitHubServiceService: GitHubServiceService) { }

  gitUserData: any = {};
  repoData: any = [];

  ngOnInit() {

    this._GitHubServiceService.genrateAccessToken(this.getGenaratedCode())
      .subscribe((data) => {
        this._GitHubServiceService.setAccessToken(data);
        this._GitHubServiceService.genarateUserData().subscribe((userData) => {
          console.log(userData);
          this.gitUserData = userData;
          this._GitHubServiceService.getRepoDetials(this.gitUserData.repos_url).subscribe((repo) => {
            this.repoData = repo;
          });
        });
      });
  }

  getGenaratedCode() {
    let urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('code');
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GitHubServiceService {

  baseUrl: String = 'http://localhost:5000'
  accessToken:String = '';

  constructor(private http: HttpClient) { }

  setAccessToken(tokenObj){  
      console.log(tokenObj.access_token);
      this.accessToken = tokenObj.access_token; 
  }

  getAccessToken(){
    return this.accessToken;
  }

  genrateAccessToken(code:String) {
    return this.http.post(this.baseUrl+"/accessToken", {"code":code});
  }

  genarateUserData(){
    return this.http.post(this.baseUrl+"/userData", {"accessToken":this.getAccessToken()});
  }

  getRepoDetials(sourceURL:any){
    return this.http.get(sourceURL);
  }
}

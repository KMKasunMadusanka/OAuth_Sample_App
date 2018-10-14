import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { GitHubServiceService } from './services/git-hub-service.service'
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    data: { title: 'Login Page' }
  },
  {
    path: 'mainPage',
    component: MainPageComponent,
    data: { title: 'Home Page' }
  }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [
    GitHubServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

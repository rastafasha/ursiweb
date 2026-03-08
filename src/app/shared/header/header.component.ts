import { Component, OnInit } from '@angular/core';
import { ServicioTitle } from 'src/app/models/serviciotitle';
import { ServiciosService } from '../../services/servicios.service';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { AccountService } from 'src/app/services/account.service';
import { ActivatedRoute } from '@angular/router';
import { ProfileService } from 'src/app/services/profile.service';
import { Profile } from 'src/app/models/profile';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  servicetitles: ServicioTitle;
  public user: User =null;
  error:string;
  id: any =null;
  userprofile: User;
  profile: Profile;

  langs: string[] = [];
  public activeLang = 'es';
  flag = false;

  constructor(
    private userService: UserService,
    private accountService: AccountService,
    private translate: TranslateService
  ){
    this.user = userService.user;
    this.translate.setDefaultLang(this.activeLang);
    this.translate.use('es');
    this.translate.addLangs(["es", "en"]);
    this.langs = [...this.translate.getLangs()];
    translate.get(this.langs).subscribe(res =>{
      console.log(res);
    })
  }

  public cambiarLenguaje(lang) {
    this.activeLang = lang;
    this.translate.use(lang);
    this.flag = !this.flag;
  }

  ngOnInit(): void {
    this.getUser();
    this.getUserServer();
  }

  getUser(): void {
    this.user = JSON.parse(localStorage.getItem('user'));
      this.id = this.user.id;
  }

  getUserServer(){
    this.userService.getUserById(this.user.id).subscribe(
      res =>{
        this.user = res;
        error => this.error = error
        // console.log(this.user);
      }
    );

  }


  logout(): void {
    this.accountService.logout();
  }


}

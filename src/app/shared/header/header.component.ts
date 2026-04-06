import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Profile } from '../../models/profile';
import { ServicioTitle } from '../../models/serviciotitle';
import { User } from '../../models/user';
import { AccountService } from '../../services/account.service';
import { UserService } from '../../services/user.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
    standalone: false
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

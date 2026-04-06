import { Component, OnInit } from '@angular/core';
import { HttpBackend } from '@angular/common/http';
import { Banner } from '../../models/banner';
import { BannerService } from '../../services/banner.service';
// import * as $ from 'jquery';

@Component({
    selector: 'app-banner',
    templateUrl: './banner.component.html',
    styleUrls: ['./banner.component.css'],
    standalone: false
})
export class BannerComponent implements OnInit {


  banners: Banner;
  error: string;
  msm_error: string;
  isLoading= false;

  constructor(
    private bannerService: BannerService,
    handler: HttpBackend,
  ) {
   }

  ngOnInit(): void {
    this.getCursos();
    window.scrollTo(0,0);
  }

  getCursos(): void {
    this.isLoading = true;
    this.bannerService.getBanners().subscribe(
      res =>{
        this.banners = res;
        error => this.error = error;
        this.isLoading = false;
      }
    );
  }


}

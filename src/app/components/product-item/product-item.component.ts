import { Component, Input, OnInit } from '@angular/core';
import { Curso } from 'src/app/models/curso';
import { MessageService } from '../../services/message.service';
import { User } from 'src/app/models/user';
import { AccountService } from 'src/app/services/account.service';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() product: Curso;
  public user: User=null;
  error:string;
  id:number = null;

  constructor(
    private messageService: MessageService,
    private userService: UserService,
    public translate: TranslateService
    ) {
      this.user = userService.user;
    }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user'));
    if(this.id == null){
      this.id = 0;
    }else{
    this.id = this.user.id;
    }
  }

  addToCart(): void{
    // console.log('sending...')
    this.messageService.sendMessage(this.product);
  }

  openModal(): void {
    // Send the product to the parent component for modal display (separate from cart)
    this.messageService.sendModalProduct(this.product);
    console.log('first')
  }

  getUser(): void {
    
    // console.log(this.user.id);
    
  }

  getUserServer(){
    this.userService.getUserById(this.user.id).subscribe(
      res =>{
        this.user = res[0];
        // error => this.error = error
        // console.log(this.user);
      }
    );

  }

  


}

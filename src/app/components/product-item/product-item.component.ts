import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Curso } from '../../models/curso';
import { User } from '../../models/user';
import { MessageService } from '../../services/message.service';
import { UserService } from '../../services/user.service';

@Component({
    selector: 'app-product-item',
    templateUrl: './product-item.component.html',
    styleUrls: ['./product-item.component.css'],
    standalone: false
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
  }


}

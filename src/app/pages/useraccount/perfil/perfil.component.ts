import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Payment } from 'src/app/models/payment';
import { Profile } from 'src/app/models/profile';
import { User } from 'src/app/models/user';
import { AccountService } from 'src/app/services/account.service';
import { PaymentService } from 'src/app/services/payment.service';
import { ProfileService } from 'src/app/services/profile.service';
import { UserService } from 'src/app/services/user.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  user:User;
  userprofile:User;
  profile:Profile;
  error:string;
  p: number = 1;
  count: number = 8;

  perfilForm: FormGroup;
  passwordForm: FormGroup;
  profileSeleccionado: Profile;
  public formSumitted = false;
  id: number | null;
  pageTitle: string;
  errors:any = null;
  infoProfile: any;
  payments: Payment;

  public storage = environment.apiUrlMedia;
   imageUrl = environment.apiUrlMedia;
  public FILE_AVATAR: any;
  public IMAGE_PREVISUALIZA: any = "assets/images/no-image.png";
  text_validation: any = null;
  public loading: boolean = false;
  userId:number;
  imagePath: string;
  option_selectedd:number = 1;
  solicitud_selectedd:any = null;

  constructor(
    private userService: UserService,
    private profileService: ProfileService,
    private activatedRoute: ActivatedRoute,
    private accountService: AccountService,
     private paymentService: PaymentService,
    private fb: FormBuilder,
  ) {
    this.user = userService.user;
  }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.getUser();
    // this.getUserServer();
    this.activatedRoute.params.subscribe( ({id}) => this.getUserServer(id));

  }

  getUser(): void {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.userId = this.user.id;

  }

  getUserServer(id:number){
    this.userService.getUserById(id).subscribe(
      res =>{
        this.userprofile = res;
        error => this.error = error
      }
    );

    // this.activatedRoute.params.subscribe( ({id}) => this.iniciarFormularioPassword(id));
    if (!id == null || !id == undefined || id) {
      this.activatedRoute.params.subscribe( ({id}) => this.iniciarFormularioPerfil(id));

    }
  }

  getPaymentUser(){
    this.paymentService.getPagosbyUser(this.user.id).subscribe((resp:any)=>{
      this.payments = resp;
    })
  }


  iniciarFormularioPerfil(id:number){
    if (!id == null || !id == undefined || id) {
      // let id = this.directory.id;
      this.pageTitle = 'Editar Perfil';
      this.profileService.getProfileUser(+id).subscribe(
        res => {
          this.perfilForm.patchValue({
            id: res.id,
            nombre: res.nombre,
            surname: res.surname,
            direccion: res.direccion,
            pais: res.pais,
            estado: res.estado,
            telhome: res.telhome,
            telmovil: res.telmovil,
            facebook: res.facebook,
            instagram: res.instagram,
            twitter: res.twitter,
            linkedin: res.linkedin,
            user_id: res.user_id,
            status: res.status,
          });
          this.profileSeleccionado = res;
          this.imagePath = res.avatar;
          // console.log(this.profileSeleccionado);

        }
      );
    } else {
      this.pageTitle = 'Crear Perfil';
    }


    this.validarFormularioPerfil();
  }

  validarFormularioPerfil(){
    this.perfilForm = this.fb.group({
      id: [''],
      nombre: ['', Validators.required],
      surname: ['', Validators.required],
      pais: [''],
      estado: [''],
      telhome: ['', Validators.required],
      telmovil: [''],
      facebook: [''],
      instagram: [''],
      twitter: [''],
      linkedin: [''],
      image: [''],
      user_id: [this.user.id],
      status: ['PENDING'],
    });
  }

  loadFile($event: any) {
     if ($event.target.files[0].type.indexOf("image")) {
      this.text_validation = "Solamente pueden ser archivos de tipo imagen";
      return;
    }
    this.text_validation = "";
    this.FILE_AVATAR = $event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(this.FILE_AVATAR);
    reader.onloadend = () => (this.IMAGE_PREVISUALIZA = reader.result);
  }

  get nombre() { return this.perfilForm.get('nombre'); }
  get surname() { return this.perfilForm.get('surname'); }
  get pais() { return this.perfilForm.get('pais'); }
  get estado() { return this.perfilForm.get('estado'); }
  get telhome() { return this.perfilForm.get('telhome'); }
  get telmovil() { return this.perfilForm.get('telmovil'); }
  get facebook() { return this.perfilForm.get('facebook'); }
  get instagram() { return this.perfilForm.get('instagram'); }
  get twitter() { return this.perfilForm.get('twitter'); }
  get linkedin() { return this.perfilForm.get('linkedin'); }
  get user_id() { return this.perfilForm.get('user_id'); }
  get status() { return this.perfilForm.get('status'); }


  guardarPerfil() {

    const formData = new FormData();
    formData.append('name', this.perfilForm.get('name')?.value);
    formData.append('surname', this.perfilForm.get('surname')?.value);
    formData.append('pais', this.perfilForm.get('pais')?.value);
    formData.append('estado', this.perfilForm.get('estado')?.value);
    formData.append('telhome', this.perfilForm.get('telhome')?.value);
    formData.append('telmovil', this.perfilForm.get('telmovil')?.value);
    formData.append('facebook', this.perfilForm.get('facebook')?.value);
    formData.append('instagram', this.perfilForm.get('instagram')?.value);
    formData.append('twitter', this.perfilForm.get('twitter')?.value);
    formData.append('linkedin', this.perfilForm.get('linkedin')?.value);
    formData.append('user_id', this.userId.toString());
    formData.append('status', 'PENDING');

    const id = this.userprofile.id;
    if (this.FILE_AVATAR) {
         formData.append("imagen", this.FILE_AVATAR);
       }

    if (id) {
      
      this.profileService.updateProfile(formData, +id).subscribe(
        res => {
          this.infoProfile = res;
            Swal.fire('Guardado', 'Los cambios fueron actualizados', 'success');
            this.ngOnInit();
        },
        error => this.errors = error
      );
    } else {
      
      this.profileService.createProfile(formData).subscribe(
        res => {
          this.infoProfile = res;
            Swal.fire('Guardado', 'Los cambios fueron creados', 'success');
            this.ngOnInit();
        },
        error => this.errors = error
      );
    }
    return false;
  }


   //Cambiar contraseña

iniciarFormularioPassword(id:number){
  // const id = this.route.snapshot.paramMap.get('id');
  if (!id == null || !id == undefined || id) {

    this.userService.getUserById(id).subscribe(
      res => {
        this.passwordForm.patchValue({
          id: res.id,
          email: res.email,
        });
      }
    );
  } else {
    this.pageTitle = 'Crear Directorio';
  }
  this.validarFormularioPassword();

}

validarFormularioPassword(){
  this.passwordForm = this.fb.group({
    id: [''],
    email: ['', Validators.required],
    password: ['', Validators.required],
  password2: ['', Validators.required],
  }, {
    validators: this.passwordsIguales('password', 'password2')

  });
}

passwordNoValido(){
  const pass1 = this.passwordForm.get('password').value;
  const pass2 = this.passwordForm.get('password2').value;

  if((pass1 !== pass2) && this.formSumitted){
    return true;
  }else{
    return false;
  }
}

passwordsIguales(pass1Name: string, pass2Name: string){
  return (formGroup: FormGroup) =>{
    const pass1Control = formGroup.get(pass1Name);
    const pass2Control = formGroup.get(pass2Name);

    if(pass1Control.value === pass2Control.value){
      pass2Control.setErrors(null)
    }else{
      pass2Control.setErrors({noEsIgual: true});
    }
  }
}

cambiarPassword(){
  this.formSumitted = true;
  const {name } = this.passwordForm.value;
    if(this.userprofile){
      //actualizar
      const data = {
        ...this.passwordForm.value,
        id: this.userprofile.id
      }
      this.accountService.resetPassword(data).subscribe(
        resp =>{
          Swal.fire('Cambiado', `${name}  Password Cambiado correctamente`, 'success');
        });
    }
  }

  optionSelected(value:number){
      this.option_selectedd = value;
      if(this.option_selectedd === 1){
        // this.ngOnInit();
      }
      if(this.option_selectedd === 2){
        this.solicitud_selectedd = null;
      }
    }



}

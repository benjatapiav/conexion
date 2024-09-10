import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuarioCorreo: string ="";
  usuarioContrasenia: string ="";

  constructor(private router: Router) { }

  ngOnInit() {
  }

  validarCredenciales(){
    this.router.navigate(['/inicio'],{
      state:{
        mail: this.usuarioCorreo,
        clave: this.usuarioContrasenia,
      }
    })
  }
  

}

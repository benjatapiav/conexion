import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  usuarioCorreo: string ="";
  usuarioContrasenia: string ="";

  constructor(private router: Router) { }

  ngOnInit() {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state){
    const {mail, clave} = navigation.extras.state as any;
    this.usuarioCorreo = mail;
    this.usuarioContrasenia = clave;
    }   
    console.log(this.usuarioCorreo);
    console.log(this.usuarioContrasenia);
  }
  //Pasajeros
  contador = 0;
  contador2 = 0;
  //contador pasajeros adultos
  decrement(){
    if (this.contador >0){
      this.contador--;
    }
  }
  increment(){
    this.contador++;
  }
  //contador pasajeros ninos
  decrement2(){
    if (this.contador2 >0){
      this.contador2--;
    }
  }
  increment2(){
    this.contador2++;
  }

  openmodal(){
    
  }
  isModalOpen = false;
  setOpen(isOpen: boolean){
    this.isModalOpen = isOpen;
  }




}

import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.scss'],
})
export class DatosComponent implements OnInit {

  ngOnInit() {}
  usuario:String;
  niveles:any[]=[
    {id:1,nivel:"1"},
    {id:2,nivel:"2"},
    {id:3,nivel:"3"},
    {id:4,nivel:"4"},
  ]
  data:any={
    nombre:"",
    apellido:"",
    education:"",
    nacimiento:""
  };
  constructor(public alertController: AlertController) {

  }
  /**
   * Metodo limpíar recorre un objeto y se define el 
   * valor de su propiedad en ""
   */
  limpiar(){
    for (var [key, value] of Object.entries(this.data)) {
      Object.defineProperty(this.data,key,{value:""})
    }
  }

  mostrar(){
    // IF
    (this.data.nombre!="" && this.data.apellido!="") &&
    // THEN 
    this.presentAlert("Usuario","Su nombre es "+this.data.nombre+" "+this.data.apellido) ||
    // ELSE 
    this.presentAlert("Usuario","No ingreso nada");
  }

  async presentAlert(titulo:string,message:string) {
    const alert = await this.alertController.create({
      header: titulo,
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }

}

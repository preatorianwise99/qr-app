import { Component } from '@angular/core';
import { NavController,ToastController, Platform } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
//import { ToastController } from '@ionic/angular';

import { HistorialProvider } from "../../providers/historial/historial";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    private barcodeScanner: BarcodeScanner,
    public navCtrl: NavController, 
    public toastController: ToastController ,
    public platform: Platform,
    public historialService : HistorialProvider
  ) {
  }

Scan()
 {
   console.log("Realizando Scan..");

   if(!this.platform.is('cordova'))
   {
     this.historialService.agregar_historial("http://google.com");
     return;
   }
   this.barcodeScanner.scan().then(barcodeData => {
    console.log('Barcode data', barcodeData);

    console.log("Result: "+ barcodeData.text)
    console.log("Format: " + barcodeData.format)
    console.log("Cancelled: " + barcodeData.cancelled);

    if(barcodeData.cancelled == true  && barcodeData.text != null)
    {
      this.historialService.agregar_historial(barcodeData.text);
    }

   }).catch(err => {
       console.log('Error', err);
       this.Mostrar_error("Error "+ err)
   });
 }

  Mostrar_error(mensaje:string)
  {
    let toast =  this.toastController.create({
      message: mensaje,
      duration: 2000
    });
    toast.present();
  }
}

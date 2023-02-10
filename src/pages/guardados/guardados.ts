import { Component } from '@angular/core';
//import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HistorialProvider } from "../../providers/historial/historial";
import { ScanData } from "../../models/scan-data.model";
/**
 * Generated class for the GuardadosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//@IonicPage()
@Component({
  selector: 'page-guardados',
  templateUrl: 'guardados.html',
})
export class GuardadosPage {

  historial:ScanData[]=[];

  constructor( private _historialservice:HistorialProvider) {
  }

  ionViewDidLoad() {
    this.historial = this._historialservice.cargar_historial();
    console.log('ionViewDidLoad GuardadosPage');
  }

  abrir_scan(index:number)
  {
    this._historialservice.abrir_scan(index);
  }
}

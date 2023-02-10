import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { ToastController } from 'ionic-angular';
import { MyApp } from './app.component';
//import { HomePage } from '../pages/home/home';
import { GuardadosPage,HomePage,MapaPage,TabsPage,ConfigurarPage,AyudaPage } from '../pages/index.paginas';
import { HistorialProvider } from '../providers/historial/historial';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@NgModule({
  declarations: [
    MyApp,
    GuardadosPage,
    HomePage,
    MapaPage,
    TabsPage ,
    ConfigurarPage,
    AyudaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    GuardadosPage,
    HomePage,
    MapaPage,
    TabsPage ,
    ConfigurarPage,
    AyudaPage
  ],
  providers: [
    StatusBar,
    BarcodeScanner,
    InAppBrowser,
    ToastController,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HistorialProvider
  ]
})
export class AppModule {}

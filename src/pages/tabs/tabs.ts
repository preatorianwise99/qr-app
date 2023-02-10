import { Component } from '@angular/core';
import { GuardadosPage,HomePage } from '../index.paginas';
import { ConfigurarPage } from '../configurar/configurar';
import { AyudaPage } from '../ayuda/ayuda';


@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tab1:any = HomePage;
  tab2:any = GuardadosPage;
  tab3:any = ConfigurarPage;
  tab4:any = AyudaPage;

  constructor() {
  }


}

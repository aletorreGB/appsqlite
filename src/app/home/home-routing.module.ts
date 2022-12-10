import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { HoraComponent } from '../hora/hora.component';
import { DatosComponent } from '../datos/datos.component';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children:[
      {
        path:'hora',
        component: HoraComponent
      },
      {
        path:'datos',
        component: DatosComponent
      }
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}

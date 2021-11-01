import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TdmsgridComponent } from './tdmsgrid/tdmsgrid.component';

const routes: Routes = [{ path: 'tdmsgrid', component: TdmsgridComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './form/form.component';
import { ShowtabledataComponent } from './showtabledata/showtabledata.component';
import { ShowdetailsComponent } from './showdetails/showdetails.component';


const routes: Routes = [
  {
    path: "tableData", component: ShowtabledataComponent
  },
  {
    path: '',
    redirectTo: 'tableData',
    pathMatch : 'full'
  },
  {
    path: 'userDetails', component : ShowdetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

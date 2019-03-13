import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AppContainerComponent } from './appcontainer/appcontainer.component';
import { CustomerlistComponent } from './customerlist/customerlist.component';

const routes: Routes = [
  {path: '', component : AppContainerComponent },
  {path: 'rapp-home', component: HomeComponent },
  {path :'app-customerlist',component:CustomerlistComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

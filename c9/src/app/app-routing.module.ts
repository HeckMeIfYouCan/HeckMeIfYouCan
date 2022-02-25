import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ImpressumComponent } from './components/impressum/impressum.component';
import {ThesisComponent} from './components/thesis/thesis.component';
import {PrivacyComponent} from './components/privacy/privacy.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'impressum', component: ImpressumComponent},
  {path: 'privacy', component: PrivacyComponent},
  {path: 'thesis', component: ThesisComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

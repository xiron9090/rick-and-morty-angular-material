import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagenotfoundComponent } from './core/components/pagenotfound/pagenotfound.component';


const routes: Routes = [
  { path: 'home', loadChildren: () => import('./core/core.module').then(m => m.CoreModule) },
  { path: 'features', loadChildren: () => import('./features/features.module').then(m => m.FeaturesModule) },
  {
    path: '', redirectTo: '/home', pathMatch: 'full'
  },
  { path: '**', component: PagenotfoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

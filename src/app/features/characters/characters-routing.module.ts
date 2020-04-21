import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharactersListComponent } from './components/characters-list/characters-list.component';
import { CharactersItemComponent } from './components/characters-item/characters-item.component';


const routes: Routes = [
  {
    path: '', component: CharactersListComponent
  },
  {
    path: ':id', component: CharactersItemComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharactersRoutingModule { }

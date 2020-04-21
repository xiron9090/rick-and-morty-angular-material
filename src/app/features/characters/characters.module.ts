import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { CharactersRoutingModule } from './characters-routing.module';
import { CharactersListComponent } from './components/characters-list/characters-list.component';
import { CharactersItemComponent } from './components/characters-item/characters-item.component';
import { CharactersService } from './services/characters.service';


@NgModule({
  declarations: [CharactersListComponent, CharactersItemComponent],
  imports: [
    CommonModule,
    CharactersRoutingModule,
    HttpClientModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatIconModule],
  providers: [CharactersService]
})
export class CharactersModule { }

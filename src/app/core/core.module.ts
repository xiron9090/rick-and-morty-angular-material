import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { CoreRoutingModule } from './core-routing.module';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';



@NgModule({
  declarations: [HeaderComponent, HomeComponent, PagenotfoundComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule, RouterModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    CoreRoutingModule


  ],
  exports: [HeaderComponent, HomeComponent, PagenotfoundComponent]
})
export class CoreModule { }

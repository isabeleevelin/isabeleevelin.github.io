import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './menu/menu.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { LogoComponent } from './logo/logo.component';
import { DadosCComponent } from './dados-c/dados-c.component';
import { RodapeComponent } from './rodape/rodape.component';
import { HearderComponent } from './hearder/hearder.component';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LogoComponent,
    DadosCComponent,
    RodapeComponent,
    HearderComponent,
    PaginaPrincipalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

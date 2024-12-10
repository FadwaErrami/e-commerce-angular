import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProduitsComponent } from './produits/produits.component';
import { PanierComponent } from './panier/panier.component';
import { FooterComponent } from './composants/footer/footer.component';
import { HeaderComponent } from './composants/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    ProduitsComponent,
    PanierComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

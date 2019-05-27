import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { BodyComponent } from './paginas/body/body.component';
import { AboutComponent } from './paginas/about/about.component';
import { ItemComponent } from './paginas/item/item.component';
import { AppRouting } from './app-routing.prueba';
import{ HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './paginas/search/search.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    AboutComponent,
    ItemComponent,
    SearchComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRouting,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomecarouselComponent } from './components/homecarousel/homecarousel.component';
import { FooterComponent } from './components/footer/footer.component';
import { SweetComponent } from './components/sweet/sweet.component';

import {RouterModule, Routes} from '@angular/router';
import { ContactsComponent } from './components/contacts/contacts.component';
import { RestaurantComponent } from './components/restaurant/restaurant.component';
import {RestApiService} from './shared/rest-api.service';

import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

import {FormGroup, FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ExitGuard} from './guards/exit.guard';
import { CustomPipe } from './pipes/custom.pipe';
import { LikeComponent } from './components/childs/like/like.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomecarouselComponent,
    FooterComponent,
    SweetComponent,
    ContactsComponent,
    RestaurantComponent,
    CustomPipe,
    LikeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
      defaultLanguage: 'ru',
    })
  ],
  providers: [RestApiService, ExitGuard],
  bootstrap: [AppComponent],
})
export class AppModule { }

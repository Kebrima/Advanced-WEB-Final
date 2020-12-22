import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomecarouselComponent} from './components/homecarousel/homecarousel.component';
import {SweetComponent} from './components/sweet/sweet.component';
import {ContactsComponent} from './components/contacts/contacts.component';
import {RestaurantComponent} from './components/restaurant/restaurant.component';
import {HttpClientModule} from '@angular/common/http';
import {RestApiService} from './shared/rest-api.service';
import {ExitGuard} from './guards/exit.guard';

const routes: Routes = [
  {path: '', component: HomecarouselComponent},
  {path: 'sweets', component: SweetComponent },
  {path: 'contacts', component: ContactsComponent},
  {path: 'restaurant/:id', component: RestaurantComponent, canDeactivate: [ExitGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule],
  exports: [RouterModule],
  providers: [RestApiService],
})
export class AppRoutingModule { }

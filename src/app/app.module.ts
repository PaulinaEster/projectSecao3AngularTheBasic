import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecepisComponent } from './recepis/recepis.component';
import { RecepisListComponent } from './recepis/recepis-list/recepis-list.component';
import { RecepisDetailComponent } from './recepis/recepis-detail/recepis-detail.component';
import { RecepeItemComponent } from './recepis/recepis-list/recepe-item/recepe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecepisComponent,
    RecepisListComponent,
    RecepisDetailComponent,
    RecepeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

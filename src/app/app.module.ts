import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { FormsModule } from '@angular/forms';
import { RootComponent } from './root/root.component';
import { CommandsComponent } from './commands/commands.component';
import { RoutingComponent } from './routing/routing.component';
import { LoginComponent } from './login/login.component';
import { LaptopComponent } from './laptop/laptop.component';

import {AuthGuard} from './auth.guard';
import { DeadEndComponent } from './dead-end/dead-end.component';
import { BindingComponent } from './binding/binding.component'

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    RootComponent,
    CommandsComponent,
    RoutingComponent,
    LoginComponent,
    LaptopComponent,
    DeadEndComponent,
    BindingComponent,
  ],
  imports: 
  [
    BrowserModule,
    FormsModule,
    AppRoutingModule  
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RootComponent } from './root/root.component';
import { CommandsComponent } from './commands/commands.component';
import { RoutingComponent } from './routing/routing.component';
import { LoginComponent } from './login/login.component';
import { LaptopComponent } from './laptop/laptop.component';

import {AuthGuard} from './auth.guard';
import { DeadEndComponent } from './dead-end/dead-end.component';
import { BindingComponent } from './binding/binding.component';
import { DirectivesComponent } from './directives/directives.component'
import { LaptopService } from './laptop/laptop.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { StudentsComponent } from './students/students.component';
import { StudentsPipe } from './students/students.pipe';
import { HoursPipe } from './students/hours.pipe';
import { PipesComponent } from './pipes/pipes.component';

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
    DirectivesComponent,
    StudentsComponent,
    StudentsPipe,
    HoursPipe,
    PipesComponent,
  ],
  imports: 
  [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [AuthGuard, LaptopService],
  bootstrap: [AppComponent]
})
export class AppModule { }

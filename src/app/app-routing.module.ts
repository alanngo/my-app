import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { RootComponent } from './root/root.component';
import { TodoComponent } from './todo/todo.component';
import { CommandsComponent } from './commands/commands.component';
import { RoutingComponent } from './routing/routing.component';
import { LoginComponent } from './login/login.component';
import { LaptopComponent } from './laptop/laptop.component';
import { DeadEndComponent } from './dead-end/dead-end.component';
import { BindingComponent } from './binding/binding.component';
import { DirectivesComponent } from './directives/directives.component';
import { AuthGuard } from './auth.guard';
import { StudentsComponent } from './students/students.component';
import { PipesComponent } from './pipes/pipes.component';

const routes: Routes = 
[
    {path:'root', component: RootComponent},
    {path:'todo', component: TodoComponent},
    {path:'commands', component: CommandsComponent},
    {path:'routing', component: RoutingComponent},
    {path:'login', component: LoginComponent},
    {path:'deadEnd', component: DeadEndComponent},
    {path: 'binding', component:BindingComponent},
    {path:'laptop', component: LaptopComponent, canActivate: [AuthGuard]}, 
    {path: 'directives', component:DirectivesComponent},
    {path: 'students', component: StudentsComponent},
    {path: 'pipes', component: PipesComponent},

    { path: '', redirectTo: '/root', pathMatch: 'full' }, //default route
    { path: '**', redirectTo: '/deadEnd', pathMatch: 'full' } //catch all route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

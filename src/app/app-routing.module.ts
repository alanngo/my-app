import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate} from '@angular/router';
import { RootComponent } from './root/root.component';
import { TodoComponent } from './todo/todo.component';
import { CommandsComponent } from './commands/commands.component';
import { RoutingComponent } from './routing/routing.component';
import { LoginComponent } from './login/login.component';
import { LaptopComponent } from './laptop/laptop.component';

const routes: Routes = 
[
    {path:'root', component: RootComponent},
    {path:'todo', component: TodoComponent},
    {path:'commands', component: CommandsComponent},
    {path:'routing', component: RoutingComponent},
    {path:'login', component: LoginComponent},
    {path:'laptop', component: LaptopComponent},

    { path: '', redirectTo: '/root', pathMatch: 'full' }, //default route
    { path: '**', redirectTo: '/root', pathMatch: 'full' } //catch all route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

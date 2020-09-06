import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RootComponent } from './root/root.component';
import { TodoComponent } from './todo/todo.component';
import { CommandsComponent } from './commands/commands.component';

const routes: Routes = 
[
    {path:'root', component: RootComponent},
    {path:'todo', component: TodoComponent},
    {path:'commands', component: CommandsComponent},

    { path: '', redirectTo: '/root', pathMatch: 'full' } //catch all route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

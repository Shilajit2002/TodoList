import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './MyComponents/about/about.component';
import { TodosComponent } from './MyComponents/todos/todos.component';

const routes: Routes = [
  {
    path:'',
    component:TodosComponent,
    pathMatch:'full'
  },
  {
    path:'about',
    component:AboutComponent,
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateAutomateComponent } from './create-automate/create-automate.component';

const routes: Routes = [
  {path : 'compilation', component : CreateAutomateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

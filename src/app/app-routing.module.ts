import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { EditCharacterComponent } from './components/character/edit-character/edit-character.component';
import { AddCharacterComponent } from './components/character/add-character/add-character.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailCharacterComponent } from './components/character/detail-character/detail-character.component';
import { ConciliumComponent } from './components/concilium/concilium.component';


const routes: Routes = [
  { path: '', redirectTo : 'dashboard', pathMatch:'full'},
  { path: 'dashboard', component : DashboardComponent },
  { path: 'concilium', component : ConciliumComponent },
  { path: 'add', component : AddCharacterComponent },
  { path: 'detail/:id', component : DetailCharacterComponent },
  { path: 'edit/:id', component : EditCharacterComponent },
  { path: '**', component : NotFoundComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }

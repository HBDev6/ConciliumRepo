import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddCharacterComponent } from './components/character/add-character/add-character.component';
import { EditCharacterComponent } from './components/character/edit-character/edit-character.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { DetailCharacterComponent } from './components/character/detail-character/detail-character.component';
import { ConciliumComponent } from './components/concilium/concilium.component';
import { FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DashboardComponent,
    ConciliumComponent,
    AddCharacterComponent,
    EditCharacterComponent,
    DetailCharacterComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

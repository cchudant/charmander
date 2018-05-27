import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component'
import { TodolistComponent } from './todolist/todolist.component'
import { TodoinputComponent } from './todoinput/todoinput.component'

@NgModule({
  declarations: [AppComponent, TodolistComponent, TodoinputComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

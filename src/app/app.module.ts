import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//component modules
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { TaskCardComponent } from './components/task-card/task-card.component';
import { AddBtnComponent } from './components/add-btn/add-btn.component';
import { CleanBtnComponent } from './components/clean-btn/clean-btn.component';
import { CreateTaskComponent } from './components/create-task/create-task.component';

//material modules
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TaskCardComponent,
    AddBtnComponent,
    CleanBtnComponent,
    CreateTaskComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

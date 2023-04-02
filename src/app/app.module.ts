import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

//component modules
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { TaskCardComponent } from './components/task-card/task-card.component';
import { AddBtnComponent } from './components/add-btn/add-btn.component';
import { CreateTaskComponent } from './components/create-task/create-task.component';

//material modules
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule, } from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button'

//http
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TaskCardComponent,
    AddBtnComponent,
    CreateTaskComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatButtonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { SampleComponent } from './sample/sample.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { TodolistComponent } from './todolist/todolist.component';
import{FontAwesomeModule  }  from '@fortawesome/angular-fontawesome'
@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    SampleComponent,
    CalculatorComponent,
    TodolistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

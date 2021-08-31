import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepartmentComponent } from './department/department.component';
import { AddDepComponent } from './department/add-dep/add-dep.component';
import { ShowDepComponent } from './department/show-dep/show-dep.component';
import { RmployeeComponent } from './rmployee/rmployee.component';
import { AddEmpComponent} from './rmployee/add-emp/add-emp.component';
import { EditEmpComponent } from './rmployee/edit-emp/edit-emp.component';
import { SharedService } from './shared.service';

import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DepartmentComponent,
    AddDepComponent,
    ShowDepComponent,
    RmployeeComponent,
    AddEmpComponent,
    EditEmpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }

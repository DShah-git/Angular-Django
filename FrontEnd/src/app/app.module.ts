import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DepartmentComponent } from './components/department/department.component';
import { ShowDepComponent } from './components/department/show-dep/show-dep.component';
import { AddEditDepComponent } from './components/department/add-edit-dep/add-edit-dep.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { ShowEmpComponent } from './components/employees/show-emp/show-emp.component';
import { AddEditEmpComponent } from './components/employees/add-edit-emp/add-edit-emp.component';
import { SharedService } from './shared.service';

import {HttpClientModule} from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DepartmentComponent,
    ShowDepComponent,
    AddEditDepComponent,
    EmployeesComponent,
    ShowEmpComponent,
    AddEditEmpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Routes } from "@angular/router";

import { EmployeeFormComponent } from "./app/admin/employee-form/employee-form.component";
import { EmployeeListComponent } from "./app/users/employee-list/employee-list.component";
import { EmployeeDetailComponent } from "./app/employee-detail/employee-detail.component"

import { InfoComponent } from "./app/info/info.component"

export const routes: Routes = [
    { path: 'covid', component: InfoComponent },
    { path: "listing", component: EmployeeListComponent },
    { path: "employee/:employeename", component: EmployeeDetailComponent },
    { path: "home", component: EmployeeFormComponent },
    { path: "", redirectTo: '/home', pathMatch: 'full' }
]


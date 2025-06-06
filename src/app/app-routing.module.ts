import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { 
    path: 'dashboard', 
    loadComponent: () => import('./pages/dashboard/dashboard.component').then(m => m.DashboardComponent) 
  },
  { 
    path: 'appointments', 
    loadComponent: () => import('./pages/appointments/appointments.component').then(m => m.AppointmentsComponent) 
  },
  { 
    path: 'calendar', 
    loadComponent: () => import('./pages/calendar/calendar.component').then(m => m.CalendarComponent) 
  },
  { 
    path: 'doctors', 
    loadComponent: () => import('./pages/doctors/doctors.component').then(m => m.DoctorsComponent) 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

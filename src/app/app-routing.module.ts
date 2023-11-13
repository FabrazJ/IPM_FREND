import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Páginas
import { LoginComponent } from './login/login.component';
import { RecoveryComponent } from './login/recovery/recovery.component';
import { AdduserComponent } from './Pages/Usuarios/adduser/adduser.component';
import { DashboardComponent } from './Pages/Dashboard/dashboard.component';
import { SideNavComponent } from './SideNav/SideNav.component';
import { AddrolComponent } from './Pages/Usuarios/addrol/addrol.component';
import { TimeReportComponent } from './Pages/Actividades/TimeReport/TimeReport.component';
import { ScAComponent } from './Pages/Oficina/ScA/ScA.component';
// import { SidebarComponent } from './sidebarc/sidebar/sidebar.component';
import { Page404Component } from './login/Page404/Page404.component';

const routes: Routes = [
  { path: 'login', 
    component: LoginComponent },
  { path: 'recovery', 
    component: RecoveryComponent },

  { path: 'home', 
    component: SideNavComponent },

  { path: 'adduser', 
    component: AdduserComponent },
    
  { path: 'addrol', 
  component: AddrolComponent },
  { path: 'tr', 
  component: TimeReportComponent },
  
  {path: 'asignacion',
  component: ScAComponent},
  { path: 'page404', component: Page404Component },


  { path: 'dashboard', 
    component: DashboardComponent }, // Ruta para el dashboard
  { path: '', 
    redirectTo: '/login', pathMatch: 'full' }, // Ruta predeterminada
  { path: '**', 
    redirectTo: '/recovery' }, // Ruta para manejar rutas no encontradas
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

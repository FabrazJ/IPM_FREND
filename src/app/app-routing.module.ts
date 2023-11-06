import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Páginas
import { LoginComponent } from './login/login.component';
import { RecoveryComponent } from './login/recovery/recovery.component';
import { AdduserComponent } from './Pages/Usuarios/adduser/adduser.component';
import { DashboardComponent } from './Pages/Dashboard/dashboard.component';
import { SideNavComponent } from './SideNav/SideNav.component';

// import { SidebarComponent } from './sidebarc/sidebar/sidebar.component';


const routes: Routes = [
  { path: 'login', 
    component: LoginComponent },
  { path: 'recovery', 
    component: RecoveryComponent },

  { path: 'home', 
    component: SideNavComponent },

  { path: 'adduser', 
    component: AdduserComponent },
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

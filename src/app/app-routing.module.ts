import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Páginas
import { LoginComponent } from './login/login.component';
import { SidebarComponent } from './sidebarc/sidebar/sidebar.component';
import { RecoveryComponent } from './login/recovery/recovery.component';
import { UsercreateComponent } from './sidebarc/usercreate/usercreate.component';
import { DashboardComponent } from './sidebarc/dashboard/dashboard.component';

const routes: Routes = [
  { path: 'login', 
    component: LoginComponent },
  { path: 'recovery', 
    component: RecoveryComponent },
  { path: 'sidebar', 
    component: SidebarComponent },
  { path: 'usercreate', 
    component: UsercreateComponent },
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

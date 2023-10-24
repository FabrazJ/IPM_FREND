import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { SidebarComponent } from './sidebarc/sidebar/sidebar.component';
import { RecoveryComponent } from './recovery/recovery.component';
import { UsercreateComponent } from './sidebarc/usercreate/usercreate.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {path: 'recovery',component:RecoveryComponent},
  { path: 'sidebar', component: SidebarComponent },
  { path: 'usercreate', component: UsercreateComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Ruta predeterminada
  { path: '**', redirectTo: '/usercreate' }, // Ruta para manejar rutas no encontradas
 // { path: '**', redirectTo: '/recovery' }, // Ruta para manejar rutas no encontradas
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SideNavComponent } from './SideNav/SideNav.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RecoveryComponent } from './login/recovery/recovery.component';
import { AdduserComponent } from './Pages/Usuarios/adduser/adduser.component';
import { DashboardComponent } from './Pages/Dashboard/dashboard.component';
import { AddrolComponent } from './Pages/Usuarios/addrol/addrol.component';

//NAV COMPONENTS
import { CerrarSesionComponent } from './SideNav/header_nav/Componentes/CerrarSesion/CerrarSesion.component';
import { ConfiguracionComponent } from './SideNav/header_nav/Componentes/Configuracion/Configuracion.component';
import { CuentaComponent } from './SideNav/header_nav/Componentes/Cuenta/Cuenta.component';

//Componentes del SideNav
import { Header_navComponent } from './SideNav/header_nav/header_nav.component';
import { Body_navComponent } from './SideNav/body_nav/body_nav.component';

//Dashboard
import { EncabezadoComponent } from './Pages/Dashboard/Encabezado/Encabezado.component';
import { GraphicsbarrasComponent } from './Pages/Dashboard/Graficos/graphicsbarras/graphicsbarras.component';
import { GraficoCircularComponent } from './Pages/Dashboard/Graficos/GraficoCircular/GraficoCircular.component';
import { GraficoRadarComponent } from './Pages/Dashboard/Graficos/GraficoRadar/GraficoRadar.component';

//Componentes
//Separacion de User Create
import { HeaderComponent } from './Pages/Usuarios/adduser/header/header.component';
import { BodyComponent } from './Pages/Usuarios/adduser/body/body.component';

//Modals de User Create 
import { EdituserComponent } from './Pages/Usuarios/adduser/body/Modals/edituser/edituser.component';
import { AgregaruserComponent } from './Pages/Usuarios/adduser/header/Modals/agregaruser/agregaruser.component';

//Componentes
//Modales Rol
import { ModalComponent } from './Pages/Usuarios/addrol/modal/modal.component';

//Componentes
//Actividades
import { TimeReportComponent } from './Pages/Actividades/TimeReport/TimeReport.component';
import { RegistroComponent } from './Pages/Actividades/TimeReport/registro/registro.component';
import { TablaComponent } from './Pages/Actividades/TimeReport/tabla/tabla.component';

//Http modules
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import{ReactiveFormsModule} from '@angular/forms';

import { ScABComponent } from './Pages/Oficina/ScA/ScAB/ScAB.component';
import { ScAComponent } from './Pages/Oficina/ScA/ScA.component';
import { ScAHComponent } from './Pages/Oficina/ScA/ScAH/ScAH.component';
import { LineHeaderComponent } from './Pages/Oficina/ScA/ScAH/LineHeader/LineHeader.component';


@NgModule({
  declarations: [			
    AppComponent,LineHeaderComponent,
    ScABComponent,
    ScAComponent,
    ScAHComponent,
    SideNavComponent,
    LoginComponent,

    //NAV
    CuentaComponent,
    ConfiguracionComponent,
    CerrarSesionComponent,
    
    // SidebarComponent,
    RecoveryComponent,
    AdduserComponent,
    AddrolComponent,
    DashboardComponent,TimeReportComponent,RegistroComponent,TablaComponent,

    //Componentes 
    HeaderComponent,
    BodyComponent,
    EdituserComponent, 
    Header_navComponent,
    AgregaruserComponent, 
    Body_navComponent,
    //modal rol 
    ModalComponent,

    //Dashboard
    EncabezadoComponent,
    GraphicsbarrasComponent,
    GraficoCircularComponent,
    GraficoRadarComponent,
      
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    //Http
    HttpClientModule,
    FormsModule,    
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

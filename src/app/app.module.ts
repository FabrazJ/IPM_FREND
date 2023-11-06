import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SideNavComponent } from './SideNav/SideNav.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RecoveryComponent } from './login/recovery/recovery.component';
import { AdduserComponent } from './Pages/Usuarios/adduser/adduser.component';
import { DashboardComponent } from './Pages/Dashboard/dashboard.component';

//Componentes del SideNav
import { Header_navComponent } from './SideNav/header_nav/header_nav.component';
import { Body_navComponent } from './SideNav/body_nav/body_nav.component';

//Dashboard
import { GraphicsbarrasComponent } from './Pages/Dashboard/graphicsbarras/graphicsbarras.component';
import { GraficoCircularComponent } from './Pages/Dashboard/GraficoCircular/GraficoCircular.component';
import { GraficoRadarComponent } from './Pages/Dashboard/GraficoRadar/GraficoRadar.component';

//Componentes
//Separacion de User Create
import { HeaderComponent } from './Pages/Usuarios/adduser/header/header.component';
import { BodyComponent } from './Pages/Usuarios/adduser/body/body.component';
//Modals de User Create 
import { EdituserComponent } from './Pages/Usuarios/adduser/body/Modals/edituser/edituser.component';
import { AgregaruserComponent } from './Pages/Usuarios/adduser/header/Modals/agregaruser/agregaruser.component';


//Http modules
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import{ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [		
    AppComponent,
    SideNavComponent,
    LoginComponent,
    // SidebarComponent,
    RecoveryComponent,
    AdduserComponent,
    DashboardComponent,

    //Componentes 
    HeaderComponent,
    BodyComponent,
    EdituserComponent, 
    Header_navComponent,
    AgregaruserComponent, 
    Body_navComponent,

    //Dashboard
    GraphicsbarrasComponent,
    GraficoCircularComponent,
    GraficoRadarComponent
      
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

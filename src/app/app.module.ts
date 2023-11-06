import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SideNavComponent } from './SideNav/SideNav.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RecoveryComponent } from './login/recovery/recovery.component';

import { AdduserComponent } from './Pages/Usuarios/adduser/adduser.component';
import { DashboardComponent } from './Pages/Dashboard/dashboard.component';

//Componentes
import { HeaderComponent } from './Pages/Usuarios/adduser/header/header.component';
import { BodyComponent } from './Pages/Usuarios/adduser/body/body.component';
import { EdituserComponent } from './Pages/Usuarios/adduser/body/Modals/edituser/edituser.component';
import { AgregaruserComponent } from './Pages/Usuarios/adduser/header/Modals/agregaruser/agregaruser.component';

//Http modules
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
// import { SideComponent } from './Side/Side.component';
import{ReactiveFormsModule} from '@angular/forms';

// import { SidebarComponent } from './sidebarc/sidebar/sidebar.component';


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
    AgregaruserComponent,
      
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

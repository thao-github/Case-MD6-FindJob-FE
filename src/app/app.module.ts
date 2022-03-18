import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register-login/register/register.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './register-login/login/login.component';
import { NavbarComponent } from './shared/navbar-footer/navbar/navbar.component';
import { FooterComponent } from './shared/navbar-footer/footer/footer.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatSliderModule} from "@angular/material/slider";
import {HttpClientModule} from "@angular/common/http";
import {AngularFireModule} from "@angular/fire/compat";
import {AngularFireStorageModule} from "@angular/fire/compat/storage";
import {environment} from "../environments/environment.prod";
import {CompanyGuard} from "./service/company.guard";
import {UserGuard} from "./service/user.guard";
import {MatPaginatorModule} from "@angular/material/paginator";
import { AdminComponent } from './admin/admin.component';
import {httpInterceptorProvider} from "./security/auth.interceptor";


@NgModule({
    declarations: [
        AppComponent,
        RegisterComponent,
        HomeComponent,
        LoginComponent,
        NavbarComponent,
        FooterComponent,
        AdminComponent,

    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        MatIconModule,
        MatButtonModule,
        MatSliderModule,
        HttpClientModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFireStorageModule,
        MatPaginatorModule
    ],
    providers: [httpInterceptorProvider,CompanyGuard, UserGuard],
    exports: [
        FooterComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }

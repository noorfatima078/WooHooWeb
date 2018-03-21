import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {LandingService } from './services/landing.service';
import {LoginserviceService } from './services/loginservice.service';
import {MatStepperModule} from '@angular/material/stepper';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


//Material Components
import {MatButtonModule, MatCheckboxModule, MatInputModule,MatRadioModule,MatMenuModule,MatFormFieldModule,MatSelectModule
  ,MatToolbarModule,MatGridListModule,MatIconModule,MatCardModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LandingComponent} from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule, BrowserXhr, Http, Request, RequestOptionsArgs, Response, XHRBackend, RequestOptions, ConnectionBackend, Headers } from '@angular/http';
import { routing, appRoutingProviders } from './app.routing';
import {CdkStepperModule} from '@angular/cdk/stepper';
import { HotelregistrationComponent } from './hotelregistration/hotelregistration.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    LoginComponent,
    DashboardComponent,
    HotelregistrationComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule, MatCheckboxModule, MatInputModule,MatRadioModule,MatMenuModule,MatFormFieldModule,MatSelectModule,
    MatToolbarModule,MatCardModule,
    BrowserAnimationsModule,MatStepperModule,FormsModule,ReactiveFormsModule,MatGridListModule,MatIconModule,
    HttpClientModule,HttpModule,
    CdkStepperModule,
    routing
  ],
  providers: [appRoutingProviders,LandingService],
  bootstrap: [AppComponent]
})
export class AppModule { }


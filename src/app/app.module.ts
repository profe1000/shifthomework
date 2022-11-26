import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HighlightDirective } from './directives/highlight.directive';
import { FormComponent } from './pages/form/form.component';
import { AddbillComponent } from './pages/addbill/addbill.component';
import { AddbilltarrifComponent } from './components/bills/addbilltarrif/addbilltarrif.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LocationComponent } from './components/location/location.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    HighlightDirective,
    FormComponent,
    AddbillComponent,
    AddbilltarrifComponent,
    ProfileComponent,
    LocationComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import * as $ from 'jquery';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AdmissionsComponent } from './admissions/admissions.component';
import { ProgramsComponent } from './programs/programs.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ScholarshipsComponent } from './scholarships/scholarships.component';
import { WhoWeAreComponent } from './who-we-are/who-we-are.component';
import { TermsconditionsComponent } from './termsconditions/termsconditions.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { UniversityDetailsComponent } from './university-details/university-details.component';
import { NiuComponent } from './university-details/niu/niu.component';
import { GlocalComponent } from './university-details/glocal/glocal.component';
import { CommonComponent } from './common/common.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AboutUsComponent,
    AdmissionsComponent,
    ProgramsComponent,
    ContactUsComponent,
    ScholarshipsComponent,
    WhoWeAreComponent,
    TermsconditionsComponent,
    PrivacyPolicyComponent,
    UniversityDetailsComponent,
    NiuComponent,
    GlocalComponent,
    CommonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

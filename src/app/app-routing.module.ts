import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ScholarshipsComponent } from './scholarships/scholarships.component';
import { AdmissionsComponent } from './admissions/admissions.component';
import { ProgramsComponent } from './programs/programs.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path: 'contact-us', component: ContactUsComponent},
  {path: 'scholarships', component: ScholarshipsComponent},
  {path: 'admission', component: AdmissionsComponent},
  {path: 'programs', component: ProgramsComponent},
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

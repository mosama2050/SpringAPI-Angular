import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent } from './componants/footer/footer.component';
import { HeaderComponent } from './componants/header/header.component';
import { RegiserComponent } from './componants/regiser/regiser.component';
import { StudentsComponent } from './componants/students/students.component';
import { OptionsComponent } from './componants/options/options.component';
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [
  {path: 'register', component: RegiserComponent},
  {path: 'control', component: OptionsComponent},
  {path: 'students', component: StudentsComponent},
  {path: '', component: StudentsComponent},
  {path: '**', component: StudentsComponent},

];
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    RegiserComponent,
    StudentsComponent,
    OptionsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

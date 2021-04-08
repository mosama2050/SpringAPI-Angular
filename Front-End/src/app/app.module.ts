import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent } from './componants/footer/footer.component';
import { HeaderComponent } from './componants/header/header.component';
import { RegiserComponent } from './componants/regiser/regiser.component';
import { StudentsComponent } from './componants/students/students.component';
import { OptionsComponent } from './componants/options/options.component';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {RouteActivatedService} from './service/route-activated.service';
import {ReactiveFormsModule} from '@angular/forms';

const routes: Routes = [
  {path: 'register', component: RegiserComponent},
  {path: 'control', component: OptionsComponent, canActivate: [RouteActivatedService]},
  {path: 'students', component: StudentsComponent, canActivate: [RouteActivatedService]},
  {path: '', component: StudentsComponent, canActivate: [RouteActivatedService]},
  {path: '**', component: StudentsComponent, canActivate: [RouteActivatedService]} ];


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
    RouterModule.forRoot(routes),
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent } from './componants/footer/footer.component';
import { HeaderComponent } from './componants/header/header.component';
import { RegiserComponent } from './componants/regiser/regiser.component';
import { StudentsComponent } from './componants/students/students.component';
import { OptionsComponent } from './componants/options/options.component';
import {RouterModule, Routes} from '@angular/router';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {RouteActivatedService} from './service/route-activated.service';
import {ReactiveFormsModule} from '@angular/forms';
import { ContentComponent } from './componants/content/content.component';
import {LoginActivatedService} from './service/login-activated.service';
import {NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';

import {multicast} from "rxjs/operators";
import { HttpIntercepterBaseAuthServiceService } from './service/http/http-intercepter-base-auth-service-service.service';

const routes: Routes = [
  {path: 'register', component: RegiserComponent, canActivate: [LoginActivatedService]},
  {path: 'content', component: ContentComponent, canActivate: [LoginActivatedService]},
  {path: 'control', component: OptionsComponent, canActivate: [RouteActivatedService]},
  {path: 'control/:id', component: OptionsComponent,canActivate: [RouteActivatedService]},
  {path: 'students', component: StudentsComponent, canActivate: [RouteActivatedService]},
  {path: 'students/:name', component: StudentsComponent,canActivate: [RouteActivatedService]},
  {path: '', component: StudentsComponent, canActivate: [RouteActivatedService]},
  {path: '**', component: StudentsComponent, canActivate: [RouteActivatedService]} ];


// @ts-ignore
// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    RegiserComponent,
    StudentsComponent,
    OptionsComponent,
    ContentComponent,

  ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes),
        HttpClientModule,
        ReactiveFormsModule,
        NgbPaginationModule

    ],
    providers: [
      {provide: HTTP_INTERCEPTORS,useClass: HttpIntercepterBaseAuthServiceService ,multi: true}
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }

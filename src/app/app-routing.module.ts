import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LogoutComponent } from './logout/logout.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ParentComponent } from './parent/parent.component';
import { DetailsComponent } from './users/details/details.component';
import { EditComponent as UserEditComponent } from './users/edit/edit.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'aboutus', component: AboutComponent
  },
  {
    path: 'contact-us', component: ContactComponent
  },
  {
    path: 'dashboard', component: DashboardComponent
  },
  {
    path: 'users',component: UsersComponent,
    pathMatch: 'prefix',
    children:[
      {
        path: 'view', component: UserEditComponent
      },
      {
        path: 'show-details',component: DetailsComponent
      }
    ]
  },
  {
    path: 'users/edit/:id', component: UserEditComponent
  },
  {
    path: 'users/details', component: DetailsComponent
  },
  {
    path: 'parent', component: ParentComponent
  },
  {
    path: 'logout', component: LogoutComponent
  },
  {
    path: '', redirectTo: 'home' , pathMatch: 'full' // default rendered component redirection to an existing path
  },
  {
    path: '**', component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

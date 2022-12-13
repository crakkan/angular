import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartComponent } from 'ng-apexcharts';
import { CharttwoComponent } from './admin/dashboard/charttwo/charttwo.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { GenerateComponent } from './admin/dashboard/generate/generate.component';
import { PostsComponent } from './admin/dashboard/posts/posts.component';
import { ProductComponent } from './admin/dashboard/product/product.component';
import { HomeComponent } from './admin/home/home.component';
// import { LoginComponent } from './login/login.component';

const routes: Routes = [
  // {
  //   component: LoginComponent,
  //   path : '' 
  // },
  {
    component: HomeComponent,
    path : '' ,
    children:[
      {path:'dashboard', component:DashboardComponent},
      {path: 'post', component:PostsComponent},
      {path: 'product', component:ProductComponent},
      {path: 'generate', component:GenerateComponent},
      {path: 'chart', component:ChartComponent},
      {path: 'chart2', component:CharttwoComponent}
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

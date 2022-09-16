import { HowItWorksComponent } from './components/how-it-works/how-it-works.component';
import { BlogComponent } from './components/blog/blog.component';
import { AboutComponent } from './components/about/about.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'our-story', component: AboutComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'how-it-works', component: HowItWorksComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }

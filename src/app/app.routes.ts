import { Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { BlogComponent } from './pages/blog/blog.component';
import { CareersComponent } from './pages/careers/careers.component';
import { CaseStudiesComponent } from './pages/case-studies/case-studies.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DocsComponent } from './pages/docs/docs.component';
import { HomeComponent } from './pages/home/home.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { ProductComponent } from './pages/product/product.component';
import { StatusComponent } from './pages/status/status.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Hallucinate.io' },
  { path: 'status', component: StatusComponent, title: 'Status' },
  { path: 'product', component: ProductComponent, title: 'Product' },
  { path: 'case-studies', component: CaseStudiesComponent, title: 'Case Studies' },
  { path: 'docs', component: DocsComponent, title: 'Docs' },
  { path: 'careers', component: CareersComponent, title: 'Careers' },
  { path: 'blog', component: BlogComponent, title: 'Changelog' },
  { path: 'pricing', component: PricingComponent, title: 'Pricing' },
  { path: 'about', component: AboutComponent, title: 'About' },
  { path: 'contact', component: ContactComponent, title: 'Contact' },
  { path: '**', redirectTo: '' },
];

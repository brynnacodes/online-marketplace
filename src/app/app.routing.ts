import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';
import { BluesComponent } from './blues/blues.component';
import { ClassicalComponent } from './classical/classical.component';
import { HipHopComponent } from './hip-hop/hip-hop.component';
import { IndieComponent } from './indie/indie.component';
import { JazzComponent } from './jazz/jazz.component';
import { PopComponent } from './pop/pop.component';
const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'blues',
    component: BluesComponent
  },
  {
    path: 'classical',
    component: ClassicalComponent
  },
  {
    path: 'hip-hop',
    component: HipHopComponent
  },
  {
    path: 'indie',
    component: IndieComponent
  },
  {
    path: 'jazz',
    component: JazzComponent
  },
  {
    path: 'pop',
    component: PopComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

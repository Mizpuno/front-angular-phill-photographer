import { provideRouter, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './components/not-found.component';
import { ServicesComponent } from './pages/services/services.component';


export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'catelog',
        loadComponent: () => import('./pages/catelog/catelog.component').then(c => c.CatelogComponent)
    },
    {
        path: 'services',
        loadComponent: () => import('./pages/services/services.component').then(c => c.ServicesComponent)
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];

import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const AppRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                redirectTo: 'preview',
                pathMatch: 'full'
            },
            {
                path: 'preview',
                component: AppComponent
            },
            {
                path: 'prod-component',
                component: AppComponent
            },
        ]
    }
];

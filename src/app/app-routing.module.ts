import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ComponentViewComponent } from './component-view/component-view.component';
import { PreviewComponent } from './preview/preview.component';

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
                component: PreviewComponent
            },
            {
                path: 'prod',
                component: ComponentViewComponent
            },
        ]
    }
];

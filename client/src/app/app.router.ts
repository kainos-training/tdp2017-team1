import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {SeeAllCoursesComponent} from "./see-all-courses/see-all-courses.component";
import {DetailsPageComponent} from "./details-page/details-page.component";

export const router: Routes = [
    { path: '', redirectTo: 'index', pathMatch: 'full' },
    { path: 'index', component: SeeAllCoursesComponent },
    { path: 'details', component: DetailsPageComponent }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
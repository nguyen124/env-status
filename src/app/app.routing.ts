import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { DeplRecordsComponent } from './depl-records/depl-records.component';

const appRoutes: Routes = [
  { path: '', component: DeplRecordsComponent },
  { path: 'env-details', component: DetailsComponent },
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
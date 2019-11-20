import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DetailsComponent } from './details/details.component';
import { DeplRecordComponent } from './depl-record/depl-record.component';

const appRoutes: Routes = [
  { path: '', component: DeplRecordComponent },
  { path: 'env-details', component: DetailsComponent },
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
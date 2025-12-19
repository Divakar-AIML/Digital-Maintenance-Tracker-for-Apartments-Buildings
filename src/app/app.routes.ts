import { Routes } from '@angular/router';
import { MaintenanceRequestComponent } from './resident/maintenance-request/maintenance-request';
import { RequestHistoryComponent } from './resident/request-history/request-history';

export const routes: Routes = [
  { path: '', redirectTo: 'new-request', pathMatch: 'full' },
  { path: 'new-request', component: MaintenanceRequestComponent },
  { path: 'history', component: RequestHistoryComponent }
];

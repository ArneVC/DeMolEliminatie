import { Routes } from '@angular/router';
import { ElimpageComponent } from './elimpage/elimpage.component';
import { ResultspageComponent } from './resultspage/resultspage.component';

export const routes: Routes = [
    { path: 'elim', component: ElimpageComponent },
    { path: 'result', component: ResultspageComponent },
];
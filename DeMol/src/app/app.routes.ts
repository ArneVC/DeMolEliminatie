import { Routes } from '@angular/router';
import { ElimpageComponent } from './elimpage/elimpage.component';
import { ResultspageComponent } from './resultspage/resultspage.component';
import { MainComponent } from './main/main.component';

export const routes: Routes = [
    { path: 'main', component: MainComponent },
    { path: 'elim', component: ElimpageComponent },
    { path: 'result', component: ResultspageComponent },
    { path: '**', redirectTo: 'main' },
];
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { CounterComponent } from './counter/counter.component';
import { CalcComponent } from './calc/calc.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'calc',component:CalcComponent},
    {path:'counter',loadComponent :() => import('./counter/counter.component').then(c=>c.CounterComponent)},
    {path:'**',component:NotfoundComponent},
];

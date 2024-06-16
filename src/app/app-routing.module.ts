import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { TrainingTrackerPageComponent } from './pages/training-tracker-page/training-tracker-page.component';
import { MyWorkoutsPageComponent } from './pages/my-workouts-page/my-workouts-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Default route
  { path: 'login', component: LoginPageComponent },
  { path: 'register', component: RegisterPageComponent},
  { path: 'training-tracker', component: TrainingTrackerPageComponent},
  { path: 'workouts', component: MyWorkoutsPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

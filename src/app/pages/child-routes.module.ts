import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//pages




const childRoutes: Routes = [

   





]

@NgModule({
  imports: [
    // RouterModule.forRoot(appRoute),
    RouterModule.forChild(childRoutes),
  ],
    exports: [ RouterModule ]
})
export class ChildRoutesModule { }

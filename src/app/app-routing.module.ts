import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PollContainerComponent } from './poll-container/poll-container.component';

const routes: Routes = [
    {
        path: '',
        component: PollContainerComponent
    },
    // {
    //     path: 'venueDetail/:id',
    //     component: VenuesListComponent
    // }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PollContainerComponent } from './poll-container/poll-container.component';

const routes: Routes = [
    {
        path: '',
        component: PollContainerComponent
    }
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PollContainerComponent } from './poll-container/poll-container.component';
import { QuestionComponent } from './question/question.component';
import { QuestionCheckboxesComponent } from './question-checkboxes/question-checkboxes.component';
import { ModalWindowComponent } from './modal-window/modal-window.component';
import { QuestionSelectComponent } from './question-select/question-select.component';
import { ModeService } from './mode.service';

@NgModule({
  declarations: [
    AppComponent,
    PollContainerComponent,
    QuestionComponent,
    QuestionCheckboxesComponent,
    ModalWindowComponent,
    QuestionSelectComponent
  ],
  entryComponents: [
    QuestionComponent,
    QuestionCheckboxesComponent,
    QuestionSelectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    ModeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

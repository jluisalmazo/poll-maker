import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PollContainerComponent } from './poll-container/poll-container.component';
import { QuestionComponent } from './question/question.component';
import { QuestionCheckboxesComponent } from './question-checkboxes/question-checkboxes.component';
import { ModalWindowComponent } from './modal-window/modal-window.component';
import { QuestionSelectComponent } from './question-select/question-select.component';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

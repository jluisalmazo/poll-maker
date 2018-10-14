import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalWindowComponent } from './modal-window/modal-window.component';
import { PollContainerComponent } from './poll-container/poll-container.component';
import { QuestionTextComponent } from './question-text/question-text.component';
import { QuestionCheckboxesComponent } from './question-checkboxes/question-checkboxes.component';
import { QuestionSelectComponent } from './question-select/question-select.component';
import { ModeService } from './mode.service';
import { QuestionOptionsComponent } from './question-options/question-options.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalWindowComponent,
    PollContainerComponent,
    QuestionTextComponent,
    QuestionCheckboxesComponent,
    QuestionSelectComponent,
    QuestionOptionsComponent
  ],
  entryComponents: [
    QuestionTextComponent,
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

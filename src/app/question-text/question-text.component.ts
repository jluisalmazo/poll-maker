import { Component } from '@angular/core';
import { ModeService } from '../mode.service';
import * as $ from 'jquery';
import 'bootstrap/js/dist/modal';

//interface for Parent-Child interaction.
export interface myinterface {
  removeInstance(index: number);
}

@Component({
  selector: 'app-question-text',
  templateUrl: './question-text.component.html',
  styleUrls: ['./question-text.component.scss']
})

export class QuestionTextComponent {

  // These parameters are passed when the component is dinamically built.
  public questionModalId = '';
  public removeQuestionModalId = '';

  // This variables are for removing the instance of this component.
  public index: number;
  public selfRef: QuestionTextComponent;
  public compInteraction: myinterface;   // interface for Parent-Child interaction.

  // Component's general variables.
  public question = 'Texto de la pregunta';

  constructor(private readonly appMode: ModeService) { }

  showModalEditQuestion() {

    $('#' + this.questionModalId).modal('show');
  }

  saveQuestionChanges(question) {

    this.question = question;
    $('#' + this.questionModalId).modal('hide');
  }

  showModalRemoveQuestion() {

    $('#' + this.removeQuestionModalId).modal('show');
  }

  removeThisQuestion(index) {

    $('#' + this.removeQuestionModalId).modal('hide');
    this.compInteraction.removeInstance(index);
  }

}

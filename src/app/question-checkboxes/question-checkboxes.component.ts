import { Component } from '@angular/core';
import { ModeService } from '../mode.service';
import * as $ from 'jquery';
import 'bootstrap/js/dist/modal';

//interface for Parent-Child interaction.
export interface myinterface {
  removeInstance(index: number);
}

@Component({
  selector: 'app-question-checkboxes',
  templateUrl: './question-checkboxes.component.html',
  styleUrls: ['./question-checkboxes.component.scss']
})

export class QuestionCheckboxesComponent {

  // These parameters are passed when the component is dinamically built.
  public questionModalId = '';
  public optionsModalId = '';
  public deleteOptionModalId = '';
  public removeQuestionModalId = '';

  // This variables are for removing the instance of this component.
  public index: number;
  public selfRef: QuestionCheckboxesComponent;
  public compInteraction: myinterface;   // interface for Parent-Child interaction.

  // Component's general variables
  public questionType = "checkboxes";
  public question = 'Texto de la pregunta';

  options = [
    { id: 1, label: 'Opción de ejemplo 1' },
    { id: 2, label: 'Opción de ejemplo 2' }
  ];

  constructor(public appMode: ModeService) { }

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

import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver, ComponentRef } from '@angular/core';
import { QuestionComponent } from '../question/question.component';
import { QuestionCheckboxesComponent } from '../question-checkboxes/question-checkboxes.component';
import { QuestionSelectComponent } from '../question-select/question-select.component';
import { ModeService } from '../mode.service';
import * as $ from 'jquery';
import 'bootstrap/js/dist/modal';


@Component({
  selector: 'app-poll-container',
  templateUrl: './poll-container.component.html',
  styleUrls: ['./poll-container.component.scss']
})
export class PollContainerComponent implements OnInit {

  @ViewChild('pollQuestionsContainer', { read: ViewContainerRef }) questionsContainer;

  // manually indexing the child components for better removal
  // although there is by-default indexing but it is being avoid for now
  // so index is a unique property here to identify each component individually.
  index: number = 0;
  // to store references of dynamically created components.
  componentsReferences = [];


  public pollTitle = 'Título de la encuesta';
  public pollDescription = 'Descripción de la encuesta';
  public numQuestionCheckboxes = 0;
  public numQuestionSelect = 0;

  constructor(private resolver: ComponentFactoryResolver, private appMode: ModeService) { }

  ngOnInit() {
  }

  showModalEditTitle() {

    $('#editPollTitleAndDesc').modal('show');
  }

  editPollTitleAndDescription(title, desc) {

    this.pollTitle = title;
    this.pollDescription = desc;

    $('#editPollTitleAndDesc').modal('hide');
  }

  addQuestionText() {

    const factory = this.resolver.resolveComponentFactory(QuestionComponent);
    this.questionsContainer.createComponent(factory);
  }

  addQuestionRadiobuttons() {

    this.numQuestionCheckboxes++;

    let factory = this.resolver.resolveComponentFactory(QuestionCheckboxesComponent);
    let component: ComponentRef<QuestionCheckboxesComponent> = this.questionsContainer.createComponent(factory);

    component.instance.questionModalId = "questionModal-" + this.numQuestionCheckboxes;
    component.instance.optionsModalId = "optionsModal-" + this.numQuestionCheckboxes;
    component.instance.deleteOptionModalId = "deleteOptionModal-" + this.numQuestionCheckboxes;
    component.instance.removeQuestionModalId = "removeQuestionModal-" + this.numQuestionCheckboxes;

    component.instance.selfRef = component.instance;
    component.instance.index = ++this.index;

    // Providing parent Component reference to get access to parent class methods
    component.instance.compInteraction = this;

    // Add reference for newly created component
    this.componentsReferences.push(component);
  }

  addQuestionSelect() {

    this.numQuestionSelect++;

    let factory = this.resolver.resolveComponentFactory(QuestionSelectComponent);
    let component: ComponentRef<QuestionSelectComponent> = this.questionsContainer.createComponent(factory);

    component.instance.questionModalId = "questionModal-" + this.numQuestionSelect;
    component.instance.optionsModalId = "optionsModal-" + this.numQuestionSelect;
    component.instance.deleteOptionModalId = "deleteOptionModal-" + this.numQuestionSelect;
    component.instance.removeQuestionModalId = "removeQuestionModal-" + this.numQuestionSelect;

    component.instance.selfRef = component.instance;
    component.instance.index = ++this.index;

    // Providing parent Component reference to get access to parent class methods
    component.instance.compInteraction = this;

    // Add reference for newly created component
    this.componentsReferences.push(component);
  }

  removeInstance(index: number) {

    if (this.questionsContainer.length < 1) {
      return;
    }

    let componentRef = this.componentsReferences.filter(x => x.instance.index == index)[0];

    // if(componentRef.instance instanceof QuestionCheckboxesComponent){
    //   alert("acabo de eliminar un componente del tipo checkboxes");
    // }

    // Drecreasing counter for type of question.
    switch(componentRef.instance.constructor){
      
      case QuestionCheckboxesComponent:
        this.numQuestionCheckboxes--;
        break;

      case QuestionSelectComponent:
      this.numQuestionSelect--;
        break;
    }

    let vcrIndex: number = this.questionsContainer.indexOf(componentRef)

    // Removing component from container
    this.questionsContainer.remove(vcrIndex);

    this.componentsReferences = this.componentsReferences.filter(x => x.instance.index !== index);
  }

  /**
   * Changes the mode of the webapp from design to preview an viceversa.
   */
  toggleAppMode() {

    this.appMode.preview = !this.appMode.preview;
  }

}

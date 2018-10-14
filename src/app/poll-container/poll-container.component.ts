import { Component, ViewChild, ViewContainerRef, ComponentFactoryResolver, ComponentRef } from '@angular/core';
import { QuestionTextComponent } from '../question-text/question-text.component';
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
export class PollContainerComponent {

  @ViewChild('pollQuestionsContainer', { read: ViewContainerRef }) questionsContainer;

  // Manually indexing the child components for better removal.
  // This index is the unique property to identify each component individually.
  index: number = 0;
  // To store references of dynamically created components.
  componentsReferences = [];

  // Component's general variables.
  public pollTitle = 'Título de la encuesta';
  public pollDescription = 'Descripción de la encuesta';
  public counterQuestionText = 0
  public counterQuestionCheckboxes = 0;
  public counterQuestionSelect = 0;
  public btnTextToggleMode = 'Ver como usuario';

  constructor(private resolver: ComponentFactoryResolver, public appMode: ModeService) { }

  showModalEditTitle() {

    $('#editPollTitleAndDesc').modal('show');
  }

  editPollTitleAndDescription(title, desc) {

    this.pollTitle = title;
    this.pollDescription = desc;

    $('#editPollTitleAndDesc').modal('hide');
  }

  /**
   * Add a question of type text into container of questions.
   */
  addQuestionText() {

    this.counterQuestionText++;

    const factory = this.resolver.resolveComponentFactory(QuestionTextComponent);    
    const component: ComponentRef<QuestionTextComponent> = this.questionsContainer.createComponent(factory);

    component.instance.questionModalId = "questTextModal-" + this.counterQuestionText;
    component.instance.removeQuestionModalId = "removeQuestTextModal-" + this.counterQuestionText;

    component.instance.selfRef = component.instance;
    component.instance.index = ++this.index;

    // Providing parent Component reference to get access to parent class methods
    component.instance.compInteraction = this;

    // Add reference for newly created component
    this.componentsReferences.push(component);

  }

  /**
   * Add a question of type Checkboxes into container of questions.
   */
  addQuestionCheckboxes() {

    this.counterQuestionCheckboxes++;

    const factory = this.resolver.resolveComponentFactory(QuestionCheckboxesComponent);
    const component: ComponentRef<QuestionCheckboxesComponent> = this.questionsContainer.createComponent(factory);

    component.instance.questionModalId = "questCheckbxModal-" + this.counterQuestionCheckboxes;
    component.instance.optionsModalId = "questCheckbxEditOptModal-" + this.counterQuestionCheckboxes;
    component.instance.deleteOptionModalId = "questCheckbxDeleteOptModal-" + this.counterQuestionCheckboxes;
    component.instance.removeQuestionModalId = "removeQuestCheckbxModal-" + this.counterQuestionCheckboxes;

    component.instance.selfRef = component.instance;
    component.instance.index = ++this.index;

    // Providing parent Component reference to get access to parent class methods
    component.instance.compInteraction = this;

    // Add reference for newly created component
    this.componentsReferences.push(component);
  }

  /**
   * Add a question of type select into container of questions.
   */
  addQuestionSelect() {

    this.counterQuestionSelect++;

    const factory = this.resolver.resolveComponentFactory(QuestionSelectComponent);
    const component: ComponentRef<QuestionSelectComponent> = this.questionsContainer.createComponent(factory);

    component.instance.questionModalId = "questSelectModal-" + this.counterQuestionSelect;
    component.instance.optionsModalId = "questSelectEditOptionModal-" + this.counterQuestionSelect;
    component.instance.deleteOptionModalId = "questSelectDeleteOptionModal-" + this.counterQuestionSelect;
    component.instance.removeQuestionModalId = "removeQuestSelectModal-" + this.counterQuestionSelect;

    component.instance.selfRef = component.instance;
    component.instance.index = ++this.index;

    // Providing parent Component reference to get access to parent class methods
    component.instance.compInteraction = this;

    // Add reference for newly created component
    this.componentsReferences.push(component);
  }

  /**
   * Removes the instance of the question identified by index, from the container of questions.
   */
  removeInstance(index: number) {

    if (this.questionsContainer.length < 1) {
      return;
    }

    let componentRef = this.componentsReferences.filter(x => x.instance.index == index)[0];

    // Drecreasing counter for type of question.
    switch(componentRef.instance.constructor){
      
      case QuestionTextComponent:
        this.counterQuestionText--;
        break;

      case QuestionCheckboxesComponent:
        this.counterQuestionCheckboxes--;
        break;

      case QuestionSelectComponent:
      this.counterQuestionSelect--;
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

    if(this.appMode.preview) {
      this.btnTextToggleMode = 'Regresar a modo de edición';
    } else {
      this.btnTextToggleMode = 'Ver como usuario';
    }
  }

}

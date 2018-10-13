import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver, ComponentRef } from '@angular/core';
import { QuestionComponent } from '../question/question.component';
import { QuestionRadiobuttonsComponent } from '../question-radiobuttons/question-radiobuttons.component';
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
  public numQuestionRadiobuttons = 0;


  constructor(private resolver: ComponentFactoryResolver) { }

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

    this.numQuestionRadiobuttons++;

    let factory = this.resolver.resolveComponentFactory(QuestionRadiobuttonsComponent);
    let component: ComponentRef<QuestionRadiobuttonsComponent> = this.questionsContainer.createComponent(factory);

    component.instance.questionModalId = "questionModal-" + this.numQuestionRadiobuttons;
    component.instance.optionsModalId = "optionsModal-" + this.numQuestionRadiobuttons;
    component.instance.deleteOptionModalId = "deleteOptionModal-" + this.numQuestionRadiobuttons;
    component.instance.removeQuestionModalId = "removeQuestionModal-" + this.numQuestionRadiobuttons;

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
    let component: QuestionRadiobuttonsComponent = <QuestionRadiobuttonsComponent>componentRef.instance;

    let vcrIndex: number = this.questionsContainer.indexOf(componentRef)

    // Removing component from container
    this.questionsContainer.remove(vcrIndex);

    this.componentsReferences = this.componentsReferences.filter(x => x.instance.index !== index);
  }

}

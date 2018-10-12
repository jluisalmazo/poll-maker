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

  @ViewChild('pollQuestionsContainer', {read: ViewContainerRef}) questionsContainer;

  pollTitle = 'Título de la encuesta';
  pollDescription = '';


  numQuestionRadiobuttons = 0;


  constructor(private resolver: ComponentFactoryResolver) { }

  ngOnInit() {
  }

  showModalEditTitle() {

    $('#modalEditTitle').modal('show');
  }

  editTitleAndDescription(title, desc) {

    this.pollTitle = title;
    this.pollDescription = desc;

    $('#modalEditTitle').modal('hide');

  } 

  addQuestionText() {

    const factory = this.resolver.resolveComponentFactory(QuestionComponent);
    this.questionsContainer.createComponent(factory);
  }

  addQuestionRadiobuttons() {

    this.numQuestionRadiobuttons++;

    const factory = this.resolver.resolveComponentFactory(QuestionRadiobuttonsComponent);
    const component: ComponentRef<QuestionRadiobuttonsComponent> = this.questionsContainer.createComponent(factory);
    component.instance.modalId = "questionRadiobuttons-" + this.numQuestionRadiobuttons;



  }

}

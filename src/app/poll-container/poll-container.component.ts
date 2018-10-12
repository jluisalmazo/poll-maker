import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { QuestionComponent } from '../question/question.component';
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

  addQuestion() {

    const questionFactoryResolver = this.resolver.resolveComponentFactory(QuestionComponent);
    this.questionsContainer.createComponent(questionFactoryResolver);
  }

}

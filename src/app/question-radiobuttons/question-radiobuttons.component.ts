import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import 'bootstrap/js/dist/modal';

@Component({
  selector: 'app-question-radiobuttons',
  templateUrl: './question-radiobuttons.component.html',
  styleUrls: ['./question-radiobuttons.component.scss']
})
export class QuestionRadiobuttonsComponent implements OnInit {

  options = [
    { id: 1, label: 'option 1' },
    { id: 2, label: 'option 2' },
    { id: 3, label: 'option 3' },
    { id: 4, label: 'option 4' }
  ];

  modalId  = '';

  modalTitle = '';
  editMode = false;
  addMode = false
  optionId = '';
  optionLabel = '';

  constructor() {}

  ngOnInit() {}
  
  showModalRadioButton(id?: string, label?: string) {

    if((id != undefined) && (label != undefined)) {

      // Edit option
      this.editMode = true;
      this.addMode = false;
      this.optionId = id;
      this.optionLabel = label;
      this.modalTitle = 'Editar opción';

    } else {

      // Add option
      this.addMode = true;
      this.editMode = false;
      this.optionId = '';
      this.optionLabel = '';
      this.modalTitle = 'Agregar nueva opción';
    }
    $('#' + this.modalId).modal('show');
  }

  addRadiobutton(label) {

    let newId = 1;
    if(this.options[this.options.length - 1] != undefined) {     
      newId = this.options[this.options.length - 1].id + 1;
    }
    this.options.push({ 'id': newId, 'label': label });
    $('#' + this.modalId).modal('hide');
    this.addMode = false;
  }

  editRadiobutton(id, label) {

    this.findAndReplace(this.options, id, label);
    $('#' + this.modalId).modal('hide');
    this.editMode = false;
  }

  findAndReplace(object, id, label) {
    object.map(function (a) {
      if (a.id == id) {
        a.label = label
      }
    })
  } 

  deleteOption(id) {

    const index = this.options.findIndex(function (arr) { return Number(arr.id) === Number(id) });  
    if (index > -1) {
       this.options.splice(index, 1);
    }   
  }
}

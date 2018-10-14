import { Component, Input } from '@angular/core';
import { ModeService } from '../mode.service';
import * as $ from 'jquery';
import 'bootstrap/js/dist/modal';

@Component({
  selector: 'app-question-options',
  templateUrl: './question-options.component.html',
  styleUrls: ['./question-options.component.scss']
})
export class QuestionOptionsComponent {

  @Input('optionsModalId') optionsModalId: string;
  @Input('deleteOptionModalId') deleteOptionModalId: string;
  @Input('options') options;

  public optionsModalTitle = '';
  public editMode = false;
  public addMode = false
  public optionId = '';
  public optionLabel = '';

  constructor(private readonly appMode: ModeService) { }

  showModalRadioButton(id?: string, label?: string) {

    if ((id != undefined) && (label != undefined)) {

      // Edit option
      this.editMode = true;
      this.addMode = false;
      this.optionId = id;
      this.optionLabel = label;
      this.optionsModalTitle = 'Editar opción';

    } else {

      // Add option
      this.addMode = true;
      this.editMode = false;
      this.optionId = '';
      this.optionLabel = '';
      this.optionsModalTitle = 'Agregar nueva opción';
    }
    $('#' + this.optionsModalId).modal('show');
  }

  addRadiobutton(label) {

    let newId = 1;
    if (this.options[this.options.length - 1] != undefined) {
      newId = this.options[this.options.length - 1].id + 1;
    }
    this.options.push({ 'id': newId, 'label': label });
    $('#' + this.optionsModalId).modal('hide');
    this.addMode = false;
  }

  editRadiobutton(id, label) {

    this.findAndReplace(this.options, id, label);
    $('#' + this.optionsModalId).modal('hide');
    this.editMode = false;
  }

  findAndReplace(object, id, label) {

    object.map(function (a) {
      if (a.id == id) {
        a.label = label
      }
    })
  }

  showModalDeleteOption(id, label) {

    this.optionId = id;
    this.optionLabel = label;
    $('#' + this.deleteOptionModalId).modal('show');
  }

  deleteOption(id) {

    const index = this.options.findIndex(function (arr) { return Number(arr.id) === Number(id) });
    if (index > -1) {
      this.options.splice(index, 1);
    }
    $('#' + this.deleteOptionModalId).modal('hide');
  }  

}

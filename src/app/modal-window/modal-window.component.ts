import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.scss']
})
export class ModalWindowComponent implements OnInit {

  @Input('modalWindowId') modalId: string;
  @Input('title') modalTitle: string;

  constructor() { }

  ngOnInit() {
  }

}

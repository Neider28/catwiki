import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal-search',
  templateUrl: './modal-search.component.html',
  styleUrls: ['./modal-search.component.css']
})
export class ModalSearchComponent {
  @Output() closeModal = new EventEmitter<boolean>();

  closeModalEmitter() {
    this.closeModal.emit(false);
  }
}

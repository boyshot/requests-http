import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Injectable } from '@angular/core';
import { AlertModalComponent } from './alert-modal/alert-modal.component';
import { ConfirmModalComponent } from './confirm-modal/confirm-modal.component';

enum AlertTypes {
  DANGER = 'danger',
  SUCESS = 'sucess'
}

@Injectable({
  providedIn: 'root'
})
export class AlertModalService {

  constructor(private modalService: BsModalService) { }

  showAlertDanger =
    (message: string) =>
      this.ShowAlert(message, AlertTypes.DANGER);

  showAlertSucess =
    (message: string) =>
      this.ShowAlert(message, AlertTypes.SUCESS, 3000);


  private ShowAlert(message: string, type: AlertTypes, dismissTimeOut?: number) {
    const bsModalRef: BsModalRef = this.modalService.show(AlertModalComponent);
    bsModalRef.content.type = type;
    bsModalRef.content.message = message;

    if (dismissTimeOut) {
      setTimeout(() => { bsModalRef.hide() }, dismissTimeOut);
    }
  }

  showConfirm(title: string, msg: string, okTxt?: string, cancelTxt?: string) {

    const bsModalRef: BsModalRef = this.modalService.show(ConfirmModalComponent);
    bsModalRef.content.title = title;
    bsModalRef.content.msg = msg;

    if (okTxt)
      bsModalRef.content.okTxt = okTxt;

    if (cancelTxt)
      bsModalRef.content.cancelTxt = cancelTxt;

    return (<ConfirmModalComponent>bsModalRef.content).confirmResult;
  }
}

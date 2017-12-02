import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service'
import { PARAMETERS } from '@angular/core/src/util/decorators';
import { Contact} from './../contact';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers:[ContactService]
})
export class ContactComponent implements OnInit {
   message:string;
   Message:string[];
   Contact:string;
  constructor(private _messageService: ContactService) { }

  ngOnInit() {
  }

  onSubmit(message: Contact){
    this._messageService.addMessage(Contact)
    .subscribe(resNewMessage =>{
      this.Message.push(resNewMessage);
    })
  }
}

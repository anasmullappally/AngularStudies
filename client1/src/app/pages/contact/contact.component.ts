import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{MatSnackBar}from '@angular/material/snack-bar'
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {

constructor(private _msgService:MessageService ,private _router:Router,private _snak:MatSnackBar){}

  onSubmit(data) {
    this._msgService.submitMsg(data)
    .subscribe({
      next:(v)=>{
        // console.log(v)
        this._snak.open(`Message has been submitted successfully`,`ok`)
        this._router.navigate([''])
      },error:(e)=>{
        console.log(e)
        this._snak.open(`Message Sent failed`,`ok`)
      }
    })
  }
}

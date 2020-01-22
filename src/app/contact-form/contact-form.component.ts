import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  ContactMethods=[
                  {id:1,name:'Email'},
                  {id:2,name:'Tel'},
                  {id:3,name:'sms'}
                ]
  constructor() { }
log(x){
  console.log(x)
}
submit(y){
  console.log(y);
}
 
ngOnInit() {
}
}

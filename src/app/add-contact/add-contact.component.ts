import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyContact } from 'src/models/myContacts';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  groups:any = []
  contact:MyContact = {}
  constructor(private api:ApiService,private addContactRouter:Router){
    this.contact.groupId = 'Select A Group'

  }

  ngOnInit(): void {
    this.api.allGroups().subscribe((result:any)=>{
      console.log(result);
      this.groups = result
    })
  }

  // add contact
  addContact(contact:any){
    this.api.addContact(contact).subscribe((data:any)=>{
      alert('New contact added successfully')
      // redirect to allcontact page
      this.addContactRouter.navigateByUrl('')
    })
  }
}

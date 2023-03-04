import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-all-contacts',
  templateUrl: './all-contacts.component.html',
  styleUrls: ['./all-contacts.component.css']
})
export class AllContactsComponent implements OnInit {

  allContacts: any = [] 
  loginDetails:any
  searchKey:string = ''
  constructor(private api:ApiService){
    this.loginDetails = new Date()
  }
  ngOnInit(): void {
    this.getAllContact()
  }

  // to get all contacts
  getAllContact(){
    // api call to get all contacts
    this.api.allContacts()
    .subscribe((result:any)=>{
      // result is all contacts array from api
      console.log(result);
      this.allContacts = result
    })
  }


  // delete Contact
  deleteContact(contactId:any){
    this.api.deleteContact(contactId).subscribe((contact:any)=>{
      // window.location.reload()
      this.getAllContact()
    }
  )
  }
}

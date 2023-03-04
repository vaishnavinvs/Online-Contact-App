import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.css']
})
export class ViewContactComponent implements OnInit {

  contactId:string = ""
  contact:any = {}
  groupName:string = ''
  constructor(private activatedRoute:ActivatedRoute,private api:ApiService){
    
  }

  ngOnInit(): void{
    // to get path parameter from url
    this.activatedRoute.params.subscribe((data:any)=>{
      this.contactId = data.id
      console.log(this.contactId);
      
    })

    // to get details of perticular contact
    this.api.viewContact(this.contactId).subscribe((result:any)=>{
      console.log(result);
      this.contact = result
      // get group id from contact
      let groupId = this.contact.groupId
      console.log(groupId);
      // api for get group details
      this.api.viewContactGroup(groupId).subscribe((data:any)=>{
        console.log(data);
        this.groupName = data.name
        
      })
    })
  }
}

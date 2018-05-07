import { Component } from '@angular/core';
import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {

  public allContacts: any;
  
  constructor(private contacts: Contacts) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactPage');
  }

  createContact(){
    let contact: Contact = this.contacts.create();
    
    contact.name = new ContactName(null, 'Test', 'Kumar');
    contact.phoneNumbers = [new ContactField('mobile', '9999999999')];
    contact.save().then(
      () => {
        console.log('Contact saved!', contact)
        alert('Contact saved');
      },
      (error: any) => console.error('Error saving contact.', error)
    );
  }

  displayAll(){
    this.contacts.find(['displayName', 'name', 'phoneNumbers', 'emails'],
      { filter: "", multiple: true })
      .then(data => {
        this.allContacts = data;
        console.log(data);
      });
  }
}

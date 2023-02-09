import React, {useState} from 'react'
import { Contact } from "../../models/contact.class"
import ContactComponent from '../pure/contact';
import ContactForm from '../pure/form/contactForm';


const ListContact = () => {

  const contactTest1 = new Contact("David", "Anacona", "davii@gmail.com", false);
  const contactTest2 = new Contact("Santiago", "Castellanos", "santicas@gmail.com", true);

  const [contactList, setContactList] = useState([contactTest1, contactTest2]);

  const changeStateContact = (contact) => {
    const index = contactList.indexOf(contact)
    const tempContact = [...contactList];
    tempContact[index].conectado = !tempContact[index].state;
    setContactList(tempContact)
  }

  const removeContact = (contact) => {
    const index = contactList.indexOf(contact)
    const tempContact = [...contactList];
    tempContact.splice(index,1);
    setContactList(tempContact);
  }

  const addContact = (contact) => {
    const tempContact = [...contactList];
    tempContact.push(contact);
    setContactList(tempContact);
  }

  return (
    <div>
        <h1>Tus contactos: </h1>
        {contactList.map((contact, index) =>{
          return(
            <ContactComponent contact={contact} key={index} changeStateContact={changeStateContact} removeContact={removeContact}/>
          )
        })}
        <div>
          <ContactForm add={addContact} />
        </div>
    </div>
  )
}


export default ListContact

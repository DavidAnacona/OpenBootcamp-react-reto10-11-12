import React from 'react'
import { Contact } from "../../models/contact.class"
import ContactComponent from '../pure/contact';


const ListContact = () => {

    const contactoPrueba = new Contact("David", "Anacona", "davii@gmail.com", false);

  return (
    <div>
        <h1>Tus contactos: </h1>
        <ContactComponent contact={contactoPrueba} />
    </div>
  )
}


export default ListContact

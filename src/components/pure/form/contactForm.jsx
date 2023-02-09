import React, { useRef } from 'react';
import { Contact } from '../../../models/contact.class';

const ContactForm = ({add}) => {

    const nameContact = useRef("");
    const lastnameContact = useRef("");
    const emailContact = useRef("");

    const addContact = (e) => {
        e.preventDefault();
        const newContact = new Contact(
            nameContact.current.value,
            lastnameContact.current.value,
            emailContact.current.value,
            false
        )
        add(newContact)
    }
    
    return (
        <form onSubmit={addContact} style={{ display: "flex", flexDirection: "column", alignItems: "center"}}>
            <div style={{marginTop: "30px", display: "flex", flexDirection: "column", alignItems: "center"}}>
                <h2>Agregar un Contacto</h2>
                <input type={"text"} placeholder='ingresa el nombre del contacto' ref={nameContact} required autoFocus style={{marginBottom: "20px", width: "250px"}} />
                <input type={"text"} placeholder='ingresa el apellido del contacto' ref={lastnameContact} required  style={{marginBottom: "20px", width: "250px"}}/>
                <input type={"email"} placeholder='ingresa el email del contacto' ref={emailContact} required  style={{marginBottom: "20px", width: "250px"}}/>
            </div>
            <button type='submit' style={{width: "200px"}}>Agregar contacto</button>
        </form>
    );
}

export default ContactForm;

import React from 'react'
import PropTypes from 'prop-types'
import { Contact } from "../../models/contact.class"

const ContactComponent = ({contact, changeStateContact , removeContact}) => {

    const stateContact = () => {
        if(contact.conectado){
            return (
                <>
                    <p style={{marginRight: "20px"}}>Contacto En Linea</p>
                    <button onClick={() => changeStateContact(contact)}>Desconectar</button>
                </>
            )
        }else{
            return (
                <>
                    <p style={{marginRight: "20px"}}>Contacto No Disponible</p>
                    <button onClick={() => changeStateContact(contact)}>Conectar</button>
                </>
            )
        }
    }
    return (
        <div style={{display: "flex", alignItems: "center"}}>
            <h3 style={{marginRight: "20px"}}>{ contact.name } { contact.lastname }</h3>
            <p style={{marginRight: "20px"}}>{ contact.email }</p>
            {stateContact()}
            <button onClick={() => removeContact(contact)}>Eliminar contacto</button>
        </div>
    )
}

ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact).isRequired,
    changeStateContact: PropTypes.func.isRequired,
    removeContact: PropTypes.func.isRequired
}

export default ContactComponent

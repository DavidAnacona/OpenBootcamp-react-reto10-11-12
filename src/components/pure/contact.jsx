import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Contact } from "../../models/contact.class"

const ContactComponent = ({contact}) => {

    const [estado, setEstado] = useState(contact.conectado);

    const cambiarEstado = () => {
        setEstado(!estado)
    }
    return (
        <div>
            <h3>{ contact.nombre } { contact.apellido }</h3>
            <p>{ contact.email }</p>
            <p>{ estado ? "Contacto En Linea" : "Contacto No Disponible" }</p>
            <button onClick={cambiarEstado}>{ estado ? "Desconectar" : "Conectar" }</button>
        </div>
    )
}

ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact)
}

export default ContactComponent

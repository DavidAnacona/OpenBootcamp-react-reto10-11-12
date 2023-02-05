import React, {useState, useEffect} from 'react';

const ComponenteFuncional = () => {

    const initialData = {
        fecha: new Date(),
        edad: 0,
        nombre: "David",
        apellidos: "Anacona"
    }
    const [data, setData] = useState(initialData);
    
    const actualizar = () => {
        setData(
            {
                ...data,
                edad: data.edad + 1,
                fecha: new Date()
            }
        )
    }
    useEffect(() => {
        const interval = setInterval(() => {
            actualizar()
        }, 1000)

        return() =>{
            clearInterval(interval)
        }
    },);

    return (
        <div>
            <h2>
                Hora Actual: {data.fecha.toLocaleTimeString()}
            </h2>
            <h3>{data.nombre} {data.apellidos}</h3>
            <h1>Edad: {data.edad}</h1>
        </div>
    );
}

export default ComponenteFuncional;

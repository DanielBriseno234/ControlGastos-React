import React, { useState } from 'react'
import Mensaje from './Mensaje';

function NuevoPresupuesto( { presupuesto, setPresupuesto, setIsValidPresupuesto } ) {
    const [mensaje, setMensaje] = useState('');

    const handeSubmit = (e) => {
        e.preventDefault();

        if(!presupuesto || presupuesto < 0){
            setMensaje('No es un presupuesto válido');
            return;
        }
        
        setMensaje('');
        setIsValidPresupuesto(true);
        
    }
  
   return (
    <div className='contenedor-presupuesto contenedor sombra'>
      
        <form onSubmit={handeSubmit} className='formulario' action="">
            <div className="campo">
                <label htmlFor="">Definir presupuesto</label>
            
                <input 
                    type="number" 
                    className='nuevo-presupuesto'
                    placeholder='Añade tu presupuesto'
                    value={presupuesto}
                    onChange={ e => setPresupuesto(Number(e.target.value))}
                />
            </div>

            <input type="submit" value="Añadir" />

            {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
        </form>

    </div>
  )
}

export default NuevoPresupuesto
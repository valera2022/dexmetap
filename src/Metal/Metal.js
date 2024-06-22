import React from 'react'
import { metalDatos } from '../datos';
import { useRef } from 'react';

export default function Metal({clase,metal}) {
    console.log(metal)
    const popRef = useRef()
    let about

    function openModal(){
        popRef.current.showModal()
    }

    function closeModal(){
        
        popRef.current.close()

    }

    if(clase && metal ){
        switch(metal) {
            case "Cromo":
                about = metalDatos.cromo
             
            //    setAbout(datos.claseA)
              break;
            case "Cadmio":
                about = metalDatos.cadmio
               
                // setAbout(datos.claseB)
              break;
            case "Cobre":
                about = metalDatos.cobre
                // setAbout(datos.claseC)
                break;
            case "Plomo":
                about = metalDatos.plomo
                // setAbout(datos.claseD)
                    break;
            case "Zinc":
                about = metalDatos.zinc
                // setAbout(datos.claseE)
                    break;
        
                
            default:
                about = "Selecione una clase de metal"
            //   setAbout("Selecione una clase de agua")
          };
        

    }

    
  return (
    
    <div className='dialog'>
        <dialog ref={popRef}>
             { clase && metal? <p>{about}</p> : <p>Elige Agua y Metal</p> }
             <button onClick={closeModal} className='cancel-pledge'>Cerrar</button>
       </dialog>  
       
       <button onClick={openModal} className='make-a-pledge-btn'>Metal</button> 
        </div>
  )
}

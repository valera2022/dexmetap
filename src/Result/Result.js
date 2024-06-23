import React from 'react'
import { datos } from '../datos'

import "./result.css"
import Metal from '../Metal/Metal'

    


export default function Result ({clase,metal}) {
    console.log(clase)
    // const [about,setAbout] = useState("")
 
    let about

    if(clase && metal ){
        switch(clase) {
            case "A":
                about = datos.claseA
             
            //    setAbout(datos.claseA)
              break;
            case "B":
                about = datos.claseB
               
                // setAbout(datos.claseB)
              break;
            case "C":
                about = datos.claseC
                // setAbout(datos.claseC)
                break;
            case "D":
                about = datos.claseD
                // setAbout(datos.claseD)
                    break;
            case "E":
                about = datos.claseE
                // setAbout(datos.claseE)
                    break;
            case "F":
                about = datos.claseF
                // setAbout(datos.claseF)
                    break;
            case "G":
                about = datos.claseG
                // setAbout(datos.claseG)
                    break;
                
            default:
                about = "Selecione una clase de agua"
            //   setAbout("Selecione una clase de agua")
          };
        

    }

    
  return (
    
    <div className='result'>
       { clase && about?<div className='resultado-son'> <p>{about}</p> <Metal clase={clase} metal={metal}/></div> : <p>Elige Agua y Metal</p> }
            
        </div>
  )
}

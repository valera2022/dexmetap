import React from 'react'
import { useState } from 'react'
import logo from "../logo.png"
import "./paramsform.css"
import { safe } from '../safe'

import Result from '../Result/Result'

export default function () {
    const [clase,setClase] = useState(null)
    const [metal,setMetal] = useState(null)
    const [toggle,setToggle] = useState(false)
    const [nivel,setNivel] = useState("")
   
    // const [claseB,setClaseB] = useState("B")
    // const [claseC,setClaseC] = useState("C")
    // const [claseD,setClaseD] = useState("D")
    // const [claseE,setClaseE] = useState("E")
    // const [claseF,setClaseF] = useState("F")
    // const [claseG,setClaseG] = useState("G")
    console.log(clase)
    console.log(metal)



    function handleClick(e){
        e.preventDefault()
        setToggle(!toggle)
      
     
        
    }

    

  return (
    <div>
        <img width={200} height={200} src={logo}/>
        <div className='formula'>
        <form action="/action_page.php" >
            <label for="cars" >Tipo de Agua</label>
            <br/>
          <select name="clases" id="clases"  onChange={((e)=> setClase(e.target.value))} value={clase} >
          <option disabled selected value> -- Elige una Opcion -- </option>
            <option value="A">Clase A</option>
            <option value="B">Clase B</option>
            <option value="C">Clase C</option>
            <option value="D">Clase D</option>
            <option value="E">Clase E</option>
            <option value="F">Clase F</option>
            <option value="G">Clase G</option>
            
            


        </select>
        <br/>
        <label for="cars">Tipo de Metal</label>
        <br/>
        <select name="metales" id="metales"  onChange={(event) => setMetal(event.target.value)} value={metal} >
          <option disabled selected value> -- Elige una Opcion -- </option>
            <option value="Cromo">Cromo</option>
            <option value="Cadmio">Cadmio</option>
            <option value="Cobre">Cobre</option>
            <option value="Plomo">Plomo</option>
            <option value="Zinc">Zinc</option>
          
            


        </select>
        {/* <label>Cantidad de Metal por litro</label>
        <input type="number" placeholder='0.00' value={nivel} onChange={(e)=> setNivel(e.target.value) }/> */}
        <br/>

  {/* <input type="su" value="Submit"/> */}
  <button id="buscar" onClick={handleClick}>Buscar</button>
</form>
</div>

     {toggle? <div><Result metal={metal} clase={clase}/> <safe/> </div> : null }
    </div>
  )
}

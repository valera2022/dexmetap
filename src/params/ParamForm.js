import React from 'react'
import { useState } from 'react'
import logo from "../logo.png"
import "./paramsform.css"
import useSafe from '../hooks/useSafe'
// import { safe } from '../safe'

import Result from '../Result/Result'

export default function ParamForm () {
    const [clase,setClase] = useState(null)
    const [metal,setMetal] = useState(null)
    const [toggle,setToggle] = useState(false)
    const [nivel,setNivel] = useState()
    const {isSafe} = useSafe("")
   
    // const [claseB,setClaseB] = useState("B")
    // const [claseC,setClaseC] = useState("C")
    // const [claseD,setClaseD] = useState("D")
    // const [claseE,setClaseE] = useState("E")
    // const [claseF,setClaseF] = useState("F")
    // const [claseG,setClaseG] = useState("G")
    console.log(clase)
    console.log(metal)
    console.log(typeof(nivel))
    console.log(nivel)



    function handleClick(e){
        e.preventDefault()
        e.stopPropagation()
        setToggle(!toggle)
       
        // isSafe(clase,metal,nivel)
      
      
     
        
    }

    

  return (
    <div className='formContainer'>
          <div className='imagen'><img  width={200} height={200} alt="imagen" src={logo}/></div>
          <h1>Dexmetap</h1>
        
        <div className='formula'>
        <form action="/action_page.php" >
            <label for="cars" >Tipo de Agua</label>
            <br/>
          <select name="clases" id="clases"  onChange={((e)=> {   e.stopPropagation()
             setClase(e.target.value)})} value={clase} >
          <option disabled selected value> -- Elige una Opcion -- </option>
            <option value="A">Clase A</option>
            <option value="B">Clase B</option>
            <option value="C">Clase C</option>
            {/* <option value="D">Clase D</option> */}
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
        <br/>
        <label>Metal en Microgramos por litro</label>
        <br/>
        <input type="number"  min="0"  placeholder=''  value={nivel} onChange={(e)=>{
          //  let round = Math.round;
          //  let x = round(e.target.value);
            setNivel(()=>parseInt(e.target.value)) }}/>
        <br/>

     {/* <input type="su" value="Submit"/> */}
     <button id="buscar" onClick={handleClick}>Buscar</button>
       </form>
    </div>

     {toggle ? <div><Result metal={metal} clase={clase} isSafe={isSafe} nivel={nivel}/> <safe/> </div> : null }
     {/* <a>Documento con mas detalles</a> */}
     <br></br>
     <a href='https://docs.google.com/document/d/19u3VzUmeUEmL58wvQcVzrruqPiJ4Cg2y-dv8U1pjK-g/edit?usp=sharing'>Documento con Detalles</a>
     
    </div>
    
  )
}

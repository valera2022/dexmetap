

export default function useSafe() {

    const isSafe =(clase,metal,nivel)=>{
        console.log(clase,metal,nivel)
        // parseFloat(nivel)
        console.log("Before if:", metal === "Cromo");
        if(metal ==="Cromo" ){
            console.log("Inside first if:", metal === "Cromo")
            if(clase === "A" || clase === "B"){
                console.log("Inside first if:", clase === "A" || "B")
                
                console.log("called a class")
              return   nivel <= 50 ? true : false

            }
           
            else if(clase === "C"){
                console.log("called c class")
                return   nivel <= 1000

                
            }
            else if(clase === "D"){
                return   nivel === 0 ? true : false
                
            }
            else if(clase === "E"){
                return   nivel <= 100 ? true : false
                
            }
            else if(clase === "F" || clase === "G"){
                return   nivel <= 300 ? true : false
                
            }

            
        }
        // else{return false}

        if(metal ==="Cadmio"){
            console.log(metal)
            console.log(nivel)
            if(clase === "A" || clase === "B"){
              return   nivel <= 5 ? true : false

            }
           
            else if(clase === "C"){
                console.log(nivel)
                console.log(clase)
                return   nivel <= 50 ? true : false

                
            }
            else if(clase === "D"){
                return   nivel <= 0 ? true : false
                
            }
            else if(clase === "E"){
                return   nivel <= 5 ? true : false
                
            }
            else if(clase === "F" || clase === "G"){
                return   nivel <= 5 ? true : false
                
            }

            
        }
        // else{return false}

        if(metal ==="Cobre"){
            if(clase === "A" ||  clase === "B"){
              return   nivel <= 200 ? true : false

            }
           
            else if(clase === "C"){
                return   nivel <= 2000 ? true : false

                
            }
            else if(clase === "D"){
                return   nivel <= 0 ? true : false
                
            }
            else if(clase === "E"){
                return   nivel <= 50 ? true : false
                
            }
            else if(clase === "F"){
                return   nivel <= 50? true : false
                
            }
            else if(clase ===  "G"){
                return   nivel <= 0? true : false
                
            }

            
        }
        // else{return false}

        
        if(metal ==="Plomo"){
            if(clase === "A" || clase === "B"){
              return   nivel <= 50 ? true : false

            }
           
            else if(clase === "C"){
                return   nivel <= 500 ? true : false

                
            }
            else if(clase === "D"){
                return   nivel <= 0 ? true : false
                
            }
            else if(clase === "E"){
                return   nivel <= 50 ? true : false
                
            }
            else if(clase === "F"){
                return   nivel <= 50? true : false
                
            }
            else if(clase ===  "G"){
                return   nivel <= 0? true : false
                
            }

            
        }
        // else{return false}
        if(metal ==="Zinc"){
            if(clase === "A"  ||  clase === "B"){
              return   nivel <= 50 ? true : false

            }
           
            else if(clase === "C"){
                return   nivel <= 100 ? true : false

                
            }
            else if(clase === "D"){
                return   nivel <= 0 ? true : false
                
            }
            else if(clase === "E"){
                return   nivel <= 50 ? true : false
                
            }
            else if(clase === "F"){
                return   nivel <= 50? true : false
                
            }
            else if(clase ===  "G"){
                return   nivel <= 0? true : false
                
            }

            
        }
        else{return false}
          
          
    }
  return {isSafe}
}

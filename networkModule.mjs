import os from 'os';

function interfaces(){
    let interfaz= os.networkInterfaces()   
    let datos=""; 
    for (let key in interfaz) { 
        datos+="Interfaz: "+ key+" "; 
        let netinfo=interfaz[key]; 
        for (let i = 0; i < netinfo.length; i++) {
            const inter = netinfo[i];
            for (var attr in inter){ 
                if(attr=="family"){
                    datos+="Familia: "+ inter[attr]+" "; 
                }
                if(attr=="address"){
                    datos+="Direccion: "+ inter[attr]+" "; 
                }
                if(attr=="internal"){
                    datos+="interno: "+ inter[attr]+" "; 
                }
                
            }
           

        }
        datos+="\n"
          
      } 

      return datos
    
}
export {
    interfaces
  }
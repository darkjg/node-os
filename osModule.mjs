import os from 'os';

function datos(){
    let devolver= (`Nombre: ${os.type()} Tipo: ${os.platform()} Versión:${os.version()} Arquitectura:${os.arch()} CPUS:${os.cpus().length} MeoriaTotal: ${(os.totalmem()/ (1024*1024)).toFixed(2)}MB MemoriaLibre: ${(os.freemem()/ (1024*1024)).toFixed(2)}MB`);
    return devolver
}

export {
    datos
  }
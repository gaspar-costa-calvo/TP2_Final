class Palabra{

  palabras = [];

getAll = async () =>{
  return this.palabras.join(" ")
}
getById = async (id) =>{
  const index = id;
  return this.palabras[index];
}
create = async (newPalabra) =>{
  const palabraValidate = /^[a-zA-Z]+$/.test(newPalabra);
  if(newPalabra.length < 8 || !palabraValidate){
    throw "Modelo no valido"
  }
  return this.palabras.push(newPalabra)
}
edit = async (index, newPalabra) =>{
  if(index < 0 || !newPalabra){
    throw error
  }
  return this.palabras.splice(index, 1, newPalabra);
}
delete = async (index) =>{
  if(index < 0){
    throw error
  }
  return this.palabras.splice(index, 1);
}

postApiData = async(palabras)=>{
  this.palabras.push(...palabras)
  return this.palabras;
}

}
export default Palabra
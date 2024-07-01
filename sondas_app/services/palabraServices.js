import Palabra from "../models/Palabra.js"
class PalabraServices{
  
  palabraModel = new Palabra();

getAllPalabrasService = async() =>{
  try {
    return this.palabraModel.getAll();
  } catch (error) {
    throw error
  }
}

getPalabraByIdService = async(id) =>{
  try {
    if(!id){
      throw error
    }
    return this.palabraModel.getById(id)
  } catch (error) {
    throw error
  }
}

createPalabraService = async(newPalabra) =>{
  try {
    if(!newPalabra){
      throw error
    }
    
    return this.palabraModel.create(newPalabra)
  } catch (error) {
    throw error
  }
}

editPalabraService = async(index, newPalabra) =>{
  try {
    if(!index && !newPalabra){
      throw error
    }
    return this.palabraModel.edit(index, newPalabra)
  } catch (error) {
    throw error
  }
}

deletePalabraService = async(index) =>{
  try {
    if(!index){
      throw error
    }
    return this.palabraModel.delete(index)
  } catch (error) {
    throw error
  }
}

getApiPalabrasService = async (cantidad) => {
  try {
    if(!cantidad){
      throw error
    }
    const apiData= await fetch(`https://texto.deno.dev/palabras?cantidad=${cantidad}`)
    const {palabras}= await apiData.json()
    return await this.palabraModel.postApiData(palabras);
  } catch (error) {
    
  }
}

}

export default PalabraServices
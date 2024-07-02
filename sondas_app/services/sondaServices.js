import Sonda from "../models/Sondas.js";

class SondaServices{
  
  sondaModel = new Sonda();

getAllSondasService = async() =>{
  try {
    return this.sondaModel.getAll();
  } catch (error) {
    throw error
  }
}

getSondaByIdService = async(id) =>{
  try {

    return this.sondaModel.getById(id)
  } catch (error) {    
    throw error;
  }
}

cargarTemperatura = async(id, temperatura) =>{
  try {

    return await this.sondaModel.cargarTemperatura(id, temperatura)

  } catch (error) {
    throw error
  }
}


}

export default SondaServices
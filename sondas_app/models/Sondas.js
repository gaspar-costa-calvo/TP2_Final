import moment from "moment";

class Sonda{

    sondas = [
      {
          id:1,
          registroTemperaturas: []
      },
      {
          id:2,
          registroTemperaturas: []
      },
      {
          id:3,
          registroTemperaturas: []
      },
      {
          id:4,
          registroTemperaturas: []
      },
      {
          id:5,
          registroTemperaturas: []
      },
  ]

  validateId = (id) => { 
    return (this.sondas.length >= id );
  }

  validateTemp = (temperatura) => {
    return !(temperatura < -20 || 100 < temperatura)
  }

  getAll = async () =>{
    return this.sondas
  }

  getById = async (id) =>{
    if (!this.validateId(id)) {
        throw {
            message: "Número de sonda incorrecto"
        }
    }
    const sonda = await this.sondas.find((e) => e.id == id);
    return  await sonda;
  }

  cargarTemperatura = async (id, temperatura) =>{
    
    if(!this.validateTemp(temperatura) || !this.validateId(id)){
      throw "datos no válidos cargando temp"
    }

    let sonda = await this.getById(id) 
   
    return await sonda.registroTemperaturas.push(
        {
            temperatura,
            date: moment().format('MMMM Do YYYY, h:mm:ss a')
        }
    );
  }
}
  export default Sonda
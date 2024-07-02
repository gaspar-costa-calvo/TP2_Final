class Temperatura{

getAll = async () =>{
  return this.temperaturas
}
getById = async (id) =>{
  const index = id;
  return this.temperaturas[index];
}
create = async (newTemperatura) =>{
  const temperaturaValidate = /^[a-zA-Z]+$/.test(newTemperatura);
  if(newTemperatura.length < 8 || !temperaturaValidate){
    throw "Modelo no valido"
  }
  return this.temperaturas.push(newTemperatura)
}
edit = async (index, newTemperatura) =>{
  if(index < 0 || !newTemperatura){
    throw error
  }
  return this.temperaturas.splice(index, 1, newTemperatura);
}
delete = async (index) =>{
  if(index < 0){
    throw error
  }
  return this.temperaturas.splice(index, 1);
}

postApiData = async(temperaturas)=>{
  this.temperaturas.push(...temperaturas)
  return this.temperaturas;
}

}
export default Temperatura
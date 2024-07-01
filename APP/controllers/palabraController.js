import PalabraServices from "../services/palabraServices.js"

class PalabraController{

  palabraServices = new PalabraServices();

getAllPalabras = async(req, res) =>{
  try {
    const data = await this.palabraServices.getAllPalabrasService();
    res.status(200).send({ Msg: data })
  } catch (error) {
    res.status(400).send({ errorMsg: error });
  }
}

getPalabraById = async(req, res) =>{
  try {
    const {id} = req.params
    const data = await this.palabraServices.getPalabraByIdService(id);
    res.status(200).send({ Msg: data })
  } catch (error) {
    res.status(400).send({ errorMsg: error });
  }
}

createPalabra = async(req, res) =>{
  try {
    const {palabra} = req.body;
    const data = await this.palabraServices.createPalabraService(palabra);
    res.status(200).send({ Msg: data })
  } catch (error) {
    res.status(400).send({ errorMsg: error });
  }
}

editPalabra = async(req, res) =>{
  try {
    const {id} = req.params;
    const {palabra} = req.body;
    const data = await this.palabraServices.editPalabraService(id,palabra);
    res.status(200).send({ Msg: data })
  } catch (error) {
    res.status(400).send({ errorMsg: error });
  }
}

deletePalabra = async(req, res) =>{
  try {
    const {id} = req.params;
    const data = await this.palabraServices.deletePalabraService(id);
    res.status(200).send({ Msg: data })
  } catch (error) {
    res.status(400).send({ errorMsg: error });
  }
}

getApiPalabras = async(req, res) => {
  try {
    const {cantidad} = req.params
    const data = await this.palabraServices.getApiPalabrasService(cantidad);
    res.status(200).send({ Msg: data });
    } catch (error) {
    res.status(422).send({ errorMsg: "no valida api" });
  }
}

}

export default PalabraController;
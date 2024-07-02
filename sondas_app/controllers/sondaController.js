import SondaServices from "../services/sondaServices.js"

class SondaController{

  sondaServices = new SondaServices();

  getAllSondas = async(req, res) =>{
    try {
      const data = await this.sondaServices.getAllSondasService();
      res.status(200).send({ Msg: data })
    } catch (error) {
      res.status(400).send({ error });
    }
  }

  getSondaById = async(req, res) =>{
    try {
      const {id} = req.params
      const data = await this.sondaServices.getSondaByIdService(id);
      res.status(200).send({ Msg: data })
    } catch (error) {
      res.status(400).send({ error });
    }
  }

  cargaTemperatura = async(req, res) =>{
    try {
      const {id, temperatura} = req.body;
      console.log("🚀 ~ SondaController ~ cargaTemperatura=async ~ temperatura:", temperatura)
      console.log("🚀 ~ SondaController ~ cargaTemperatura=async ~ id:", id)

      
      const data = await this.sondaServices.cargarTemperatura(id, temperatura);
      res.status(200).send({ Msg: data })
    } catch (error) {
      res.status(400).send({ error });
    }
  }

  editSonda = async(req, res) =>{
    try {
      const {id} = req.params;
      const {sonda} = req.body;
      const data = await this.sondaServices.editSondaService(id,sonda);
      res.status(200).send({ Msg: data })
    } catch (error) {
      res.status(400).send({ error });
    }
  }

  deleteSonda = async(req, res) =>{
    try {
      const {id} = req.params;
      const data = await this.sondaServices.deleteSondaService(id);
      res.status(200).send({ Msg: data })
    } catch (error) {
      res.status(400).send({ error });
    }
  }

}

export default SondaController;
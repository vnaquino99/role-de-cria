import servicoModel from "../model/servicoModel.js"

export const criarServico = async (req, res) => {
    const Servico = req.body

    try {
        const novoServico = await servicoModel.create(Servico)
        res.status(201).json(novoServico)
    } catch(err) {
        res.status(500).json({message: "Erro ao criar serviço.", err})
        console.log(err)
    }
}

export const listarServicos = async (req, res) => {
    try {
        const servicos = await servicoModel.find().sort({nome: 1})
        res.json(servicos)
    } catch (error) {
        res.status(500).json({message: "erro ao listar serviços."})
    }
}

export const abrirServico = async (req, res) => {
    const { id } = req.params

    try {
    const servico = await servicoModel.findById(id);
    if (!servico) {
      return res.status(404).json({ message: "Servico não encontrado" });
    }

    res.status(200).json(servico);
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar servico" });
  }
}
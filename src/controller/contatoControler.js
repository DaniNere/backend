import { Contato } from "../models/contato.js";
import { contatoValidation } from "../utils/validations.js";

// Criação de Contato [POST]
export const criaContato = async (req, res) => {
  const { error, value } = contatoValidation.validate(req.body, { abortEarly: false });

  if (error) {
    return res.status(400).json({ message: "Erro de validação", details: error.details });
  }

  const { nome, sobrenome, email, telefone, observacoes, favorito } = req.body;

  try {
    const novoContato = new Contato({
      nome,
      sobrenome,
      email,
      telefone,
      observacoes,
      favorito,
    });
    await novoContato.save();
    res.json({ message: "Contato criado com sucesso." });
  } catch (error) {
    res.status(500).json({ message: "Um erro ocorreu ao adicionar contato", error: error.message });
  }
};

// Listagem de Contatos [GET]
export const listarContatos = async (req, res) => {
  try {
    const contatos = await Contato.find().select("-__v");
    res.json(contatos);
  } catch (err) {
    res.status(500).json({ message: "Erro ao listar contatos", error: err.message });
  }
};

// Obter Contato por ID [GET]
export const contatoId = async (req, res) => {
  try {
    const contato = await Contato.findById(req.params.id).select("-__v");

    if (contato) {
      res.json(contato);
    } else {
      res.status(404).json({ message: "Contato não encontrado." });
    }
  } catch (err) {
    res.status(500).json({ message: "Erro ao buscar contato", error: err.message });
  }
};

// Atualização de Contato [PUT]
export const atualizaContato = async (req, res) => {
  const { error, value } = contatoValidation.validate(req.body, { abortEarly: false });

  if (error) {
    return res.status(400).json({ message: "Erro de validação", details: error.details });
  }

  const { nome, sobrenome, email, telefone, observacoes, favorito } = req.body;

  try {
    const contato = await Contato.findByIdAndUpdate(
      req.params.id,
      { nome, sobrenome, email, telefone, observacoes, favorito },
      { new: true }
    );

    if (contato) {
      res.json({ message: "Contato atualizado com sucesso.", contato });
    } else {
      res.status(404).json({ message: "Contato não encontrado." });
    }
  } catch (err) {
    res.status(500).json({ message: "Um erro ocorreu ao atualizar", error: err.message });
  }
};

// Remoção de Contato [DELETE]
export const deletaContato = async (req, res) => {
  try {
    const contato = await Contato.findByIdAndDelete(req.params.id);

    if (contato) {
      res.json({ message: "Contato removido com sucesso." });
    } else {
      res.status(404).json({ message: "Contato não encontrado." });
    }
  } catch (err) {
    res.status(500).json({ message: "Um erro ocorreu ao remover", error: err.message });
  }
};

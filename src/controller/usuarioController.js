import { Usuario } from "../models/usuario.js";
import { usuarioValidation } from "../utils/usuarioValidation.js";
import bcrypt from "bcrypt";

export const criaUsuario = async (req, res) => {
  const { error, value } = usuarioValidation.validate(req.body, { abortEarly: false });

  if (error) {
    return res.status(400).json({ message: "Erro de validação", errors: error.details });
  }

  const { nome, email, senha } = value;

  try {
    // Hash da senha antes de salvar
    const hashedSenha = await bcrypt.hash(senha, 10);

    const novoUsuario = new Usuario({
      nome,
      email,
      senha: hashedSenha
    });

    await novoUsuario.save();
    res.json({ message: "Usuário criado com sucesso." });
  } catch (error) {
    res.status(500).json({ message: "Um erro ocorreu ao adicionar usuário", error: error.message });
  }
};

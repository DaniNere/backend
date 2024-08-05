import Joi from "joi";

// Validação para a inserção/atualização de um usuário
export const usuarioValidation = Joi.object({
  nome: Joi.string().max(150).required(),
  email: Joi.string().email().required(),
  senha: Joi.string().min(6).required()
});

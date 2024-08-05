import Joi from "joi";

export const usuarioValidation = Joi.object({
  nome: Joi.string().max(150).required()
    .messages({
      "string.base": "O nome deve ser uma string.",
      "string.empty": "O nome é obrigatório.",
      "string.max": "O nome deve ter no máximo 150 caracteres.",
      "any.required": "O nome é obrigatório."
    }),
  
  email: Joi.string().email().required()
    .messages({
      "string.base": "O email deve ser uma string.",
      "string.empty": "O email é obrigatório.",
      "string.email": "O email deve ser válido.",
      "any.required": "O email é obrigatório."
    }),

  senha: Joi.string().min(6).required()
    .messages({
      "string.base": "A senha deve ser uma string.",
      "string.empty": "A senha é obrigatória.",
      "string.min": "A senha deve ter pelo menos 6 caracteres.",
      "any.required": "A senha é obrigatória."
    })
});

import { Router } from "express";
import { criaUsuario } from "../controller/usuarioController.js";

export const rotasUsuario = Router();

rotasUsuario.post("/", criaUsuario);
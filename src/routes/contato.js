import { Router } from "express";
import { criaContato, listarContatos, atualizaContato, deletaContato, contatoId } from "../controller/contatoControler.js";

export const rotasContato = Router();

rotasContato.post("/cadastro", criaContato);
rotasContato.get("/", listarContatos);
rotasContato.get("/:id", contatoId);
rotasContato.put("/:id", atualizaContato);
rotasContato.delete("/:id", deletaContato);
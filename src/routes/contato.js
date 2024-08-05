import { Router } from "express";
import { criaContato, listarContatos, atualizaContato, deletaContato, contatoId } from "../controller/contatoControler.js";

export const rotasContato = Router();

rotasContato.post("/contato", criaContato);
rotasContato.get("/contatos", listarContatos);
rotasContato.get("/contatos/:id", contatoId);
rotasContato.put("/contatos/:id", atualizaContato);
rotasContato.delete("/contatos/:id", deletaContato);
import express from "express";

const router = express.Router();

let USUARIOSSESI = [
    {id: 1, nome: "Joao Fiot", email: "joaofiot@gmail.com"},
    {id: 2, nome: "Mirella Semen", email: "mirella@gmail.com"},
    {id: 3, nome: "Sem Ducha", email: "semducha@gmail.com"}
];

/**
 * @swagger
 * /usuarios:
 *  get:
 *       summary: Lista todos os usuários
 *       tags: [Usuários]
 *       responses:
 *           200:
 *               description: Lista de usuários retornada com sucesso
 */

router.get("/", (req, res) =>{
    res.status(200).json(USUARIOSSESI);
});

/**
 * @swagger
 * /usuarios:
 *  post:
 *      summary: Cadastra um novo usuário
 *      tags: [Usuários]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      required:
 *                          - nome
 *                          - email
 *                      properties:
 *                          nome:
 *                              type: string
 *                              example: Joao Fiot
 *                          email:
 *                              type: string
 *                              example: joaofiot@gmail.com
 *      responses:
 *          201:
 *              description: Usuário cadastrado com sucesso
 */

router.post("/", (req, res) =>{
    const {nome, email} = req.body;

    const novoUsuario = {
        id: USUARIOSSESI.length + 1,
        nome,
        email
    };

    USUARIOSSESI.push(novoUsuario);
    res.status(201).json(novoUsuario);
});

export default router;
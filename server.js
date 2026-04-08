import express from "express";
import swaggerSPec from "./swagger.js";
import swaggerUI from "swagger-ui-express";

//usuarios routes
import usuariosRoutes from "./routes/usuarios.js";

const app = express();
const PORT = 5000;

app.use(express.json());

/**
* @swagger
* /:
*   get:
*       summary: Rota inicial da API
*       tags : [Inicial]
*       responses:
*           200:
*               description: API funcionando
*/

app.get("/", (req, res) =>{
    res.status(200).json({msg: "API funcionando"});
});

app.use("/usuarios", usuariosRoutes);
app.use("/api-docs",swaggerUI.serve, swaggerUI.setup(swaggerSPec));

app.listen(PORT, ()=>{
    console.log(`http://localhost:${PORT}`);
    console.log(`http://localhost:${PORT}/api-docs`);
});
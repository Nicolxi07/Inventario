/*importamos al framework express */

import express from "express";
import cors from "cors"
import categoriasRoutes from "./routes/categorias.routes.js"

/*Asignamos a app toda funcionalidad para mi server web */

const app = express();

/*setear un puerto ami web server */
app.set("port",5000);

app.use(express.json());

app.use(cors());
/*routers */

app.use("/api/categorias",categoriasRoutes)

export default app;
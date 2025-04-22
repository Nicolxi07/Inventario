
import {Router} from "express";
import {methodHTPP as categoriaController} from "../controllers/categorias.controllers.js";
/*Creamos el enrutador */
const router = Router();

router.get("/", categoriaController.getCategorias);
router.get("/:id", categoriaController.getCategory);
router.post("/", categoriaController.postCategorias);



export default router;

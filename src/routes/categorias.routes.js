
import {Router} from "express";
import {methodHTPP as categoriaController} from "../controllers/categorias.controllers.js";
/*Creamos el enrutador */
const router = Router();

router.get("/", categoriaController.getCategorias);//para crud - read
router.get("/:id", categoriaController.getCategory); //read 1 sola fila
router.post("/", categoriaController.postCategorias); //create

router.delete("/:id", categoriaController.deleteCategory); 



export default router;

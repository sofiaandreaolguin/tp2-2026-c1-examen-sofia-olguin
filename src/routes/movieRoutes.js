import express from "express";
import {getAllMoviesController, getMovieController, getAwardWinnersController, getLatestMoviesController} from '../controllers/movieController.js';


const router = express.Router();


router.get("/", getAllMoviesController);
router.get('/winners', getAwardWinnersController);
router.get('/latest', getLatestMoviesController);


router.get("/:id", getMovieController);
//
// ⚠️ IMPORTANTE: las rutas con path fijo (/winners, /search) deben definirse
//    ANTES de la ruta dinámica (/:id), porque Express las evalúa en orden.
//    Si /:id se define primero, "winners" y "latest" serán interpretados como un id.

export default router;

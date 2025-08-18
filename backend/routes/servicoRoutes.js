import express from 'express'
import {protect} from '../middleware/authMiddleware.js'
import { abrirServico, criarServico, listarServicos } from '../controller/servicoController.js'


const router = express.Router()

//create
router.post('/', criarServico)
//update

//delete

//read
router.get('/', listarServicos)
//open
router.get('/:id', abrirServico)

export default router
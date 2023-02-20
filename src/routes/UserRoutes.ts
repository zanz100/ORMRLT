import { Router } from "express";
import UserController from '../Controllers/UserController';


const router = Router()

router.post('/post', UserController.postUser)
router.get('/post', UserController.getUser)
router.get('/post/:id', UserController.getOneUser)
router.put('/post?:', UserController.updateUser)
router.delete('/post/:id', UserController.deleteUser)


export default router
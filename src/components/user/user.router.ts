import { Router } from 'express'
import  {validateObjectid} from '../middleware/validateObjectId'
import { createUser, getUser, getUsers, updateUser, deleteUser } from './user.controller'

const router = Router()


router.post('/user',createUser)
router.get('/user', getUsers)
router.get('/user/:id', validateObjectid, getUser)
router.put('/user/:id',validateObjectid, updateUser)
router.delete('/user/:id',validateObjectid,deleteUser)

export const userRoutes = router

import {Router} from 'express'

import { HobbyValidationSchema } from './hobby.model'
import {validateBody} from '../middleware/validatation'
import {getHobbies,createHobby,getHobby,deleteHobby,updateHobby} from './hobby.controller'
import  {validateObjectid} from '../middleware/validateObjectId'
const router = Router()



router.get('/hobby', getHobbies)


router.post('/hobby', validateBody(HobbyValidationSchema), createHobby)

router.get('/hobby/:id',validateObjectid, getHobby)
router.delete('/hobby/:id',validateObjectid, deleteHobby)

router.put('/hobby/:id',validateObjectid, updateHobby)

export const hobbyRoutes = router



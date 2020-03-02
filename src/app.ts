import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import dotenv from 'dotenv'


/**
 * Swagger
 */
import swaggerUI from 'swagger-ui-express'
const swaggerDocument = require('./swagger.json');




import { hobbyRoutes } from './components/hobby'
import { userRoutes } from './components/user'

dotenv.config()


mongoose.connect(`${process.env.MONGODB_URI}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})






const app = express()

app.use(bodyParser.json())


app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));
app.use(hobbyRoutes)
app.use(userRoutes)








const port = process.env.PORT
app.listen(process.env.PORT,()=>{
    console.log(`Server listening on ${port} port`);
})



export default app
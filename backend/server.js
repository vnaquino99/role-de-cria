import express from 'express'
import connectDB from './db/db.js'
import dotenv from 'dotenv'
import cors from 'cors'
import authRotes from './routes/authRoutes.js'
import servicoRoutes from './routes/servicoRoutes.js'

dotenv.config()
const PORT = 3000

const app = express()
app.use(cors())
app.use(express.json())


connectDB()

app.get('/', (req,res) => {
    return res.send('<h1>Role-de-Cria</h1>\n<p>Passeios que você só encontra aqui :D</p>')
})

app.use("/api/auth/", authRotes)
app.use("/api/servicos/", servicoRoutes)

app.listen(PORT, () => {
    console.log(`server running on: http://localhost:${PORT}`)
})
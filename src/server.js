const express = require('express')
const prisma = require('./prisma')

const app = express()

app.use(express.json())

app.post('/clientes', async (req, res) => {

    const { nome, telefone, email } = req.body

    const cliente = await prisma.cliente.create({
        data: {
            nome,
            telefone,
            email
        }
    })

    res.json(cliente)
})

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000')
})
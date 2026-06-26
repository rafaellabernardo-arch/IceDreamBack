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

app.post('/funcionarios', async (req, res) => {

    const { nome, cargo, telefone, email } = req.body

    const funcionario = await prisma.funcionario.create({
        data: {
            nome,
            cargo,
            telefone,
            email
        }
    })

    res.json(funcionario)

})

app.post('/produtos', async (req, res) => {

    
    const { nome, preco } = req.body

    const produto = await prisma.produto.create({
        data: {
            nome,
            preco
        }
    })

    res.json(produto)

})

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000')
})

app.post('/pedidos', async (req, res) => {

    const { clienteId, itens } = req.body

    if (itens.length === 0) {
        return res.status(400).json({
            mensagem: 'O pedido deve possuir pelo menos um item'
        })
    }

    const pedido = await prisma.pedido.create({
        data: {
            clienteId,
            valorTotal: 0,
            status: 'ABERTO'
        }
    })

    res.json(pedido)
})
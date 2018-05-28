const clc = require('cli-color')
const express = require('express')
const ejs = require('ejs')

const app = express()

app.set('views', 'html')
app.set('view engine', 'ejs')
app.engine('html', ejs.renderFile)

app.use(express.static('public'))

app.get('/', (req, res) => {
    let client_ip = req.ip
    console.log(clc.blue(client_ip))

    res.render('index.html', { ip:client_ip })
})


app.listen(8000, () => {
    console.log(clc.green('Server started'))
})
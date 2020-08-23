const express = require('express')

const path=require('path')

const app = express()

app.use('/static', express.static(path.join(__dirname, 'public')))

app.listen(3000, () => {
    console.log('服务器启动 port'+3000)
})
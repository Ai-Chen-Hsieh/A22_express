// 加入模組
const express = require('express')
const app = express()
const port = 3000

// require handlebars
const exphbs = require('express-handlebars')

// setting template engine
app.engine('handlebars',exphbs({defaultLayout:'main'}))
app.set('view engine','handlebars')

// 靜態網頁
app.use(express.static('public'))

// 設定路由
app.get('/',(req,res) => {
    const showContent = '首頁';
    res.render('index.handlebars',{content:showContent})
})
app.get('/:result',(req,res) => {
    const showContent = req.params.result;
    res.render('index.handlebars',{content:showContent})
})

// 建立監聽
app.listen(port,()=>{
    console.log(`express is running on http://localhost:${port}`)
})
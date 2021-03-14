const express=require("express")
const port = process.env.PORT || 4000


const app=express()

app.use(express.static(__dirname + "/public"))

app.use(express.static("node-modules"))

app.set('view engine', 'ejs');

app.set('views', __dirname + '/views');


app.get('/', (req, res) => {
    res.render('index')
});


app.listen(port,()=>{
    console.log('it is working on port 4000')
})

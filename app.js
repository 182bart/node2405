const express = require("express");
const port = 3000
const app = express();
//ustawienie, ze moja aplikacja musi korzystac z silnika hbs
app.set("view engine", 'hbs')
//gdy uzytkownik wchodzi na stronę
app.get('/', function (req, res) {
res.render('index',{pageTitle: "Lekcja01"})

})
app.get('/Bart', function (req, res){
res.render('Bart')
})
app.listen(port, (err) => {
if (err) {
return console.log("coś poszło nie tak...:", err)
}
console.log("serwer działa na porcie", port)
})
// Podpięcie css
const path = require('path')
app.use('/assets', express.static(path.join(__dirname, "./assets")));
app.use('/js', express.static(path.join(__dirname, "./js")));

const fromAnotherFile = require("./functions")
app.get('/', function (req, res) {
res.render('index', {
pageTitle: "Lekcja01",
subTitle: fromAnotherFile.someTitle
})
})

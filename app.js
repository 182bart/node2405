const express = require("express");
const port = process.env.PORT || 3000;
const app = express();
const importFunctions = require("./func")
//ustawienie, ze moja aplikacja musi korzystac z silnika hbs
app.set("view engine", 'hbs')
//gdy uzytkownik wchodzi na stronę
app.get('/index', function (req, res) {

  const sample= ()=>{
    return "test"
  }
res.render('index',{pageTitle: "Lekcja01", newVar:sample()})

})
app.get('/Bart', function (req, res){
res.render('Bart',{ subTitle:importFunctions.someTitle})
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

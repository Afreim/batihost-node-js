const express = require("express");
const app = express();
const path = require("path")

app.use(express.static("public"));

var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ 
extended: true
})); 
const templateDir = path.resolve(`${process.cwd()}${path.sep}`);

app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

app.get("/kredi", function(request, response) {
  response.render(__dirname + "/index.ejs");
});

app.get("/kredibasarili", function(request, response) {
  response.render(__dirname + "/kredibasarili.ejs");
});

app.get("/kredibasarisiz", function(request, response) {
  response.render(__dirname + "/kredibasarisiz.ejs");
});

app.post("/odemepost", (request, response)  => {
  let bilgi = request.body
  const user = bilgi["user"];
  const miktar = bilgi["credit"];
  const gkod = bilgi["guvenlik"];
  if (!user && !miktar) return response.json({hata: "Oyuncu veya kredi miktarı girilmemiş!"})  
  if (gkod = "guvenlik kodu") {
    //yapilacak işlemi yazın.
  } else return response.json({hata: "Güvenlik kodu hatali!"});
});

const listener = app.listen(process.env.PORT, function() {
  console.log("Your app is listening on port " + listener.address().port);
});

// afreim tarafından yazıldı.

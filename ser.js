const express = require("express");
  
const app = express();
// создаем парсер для данных в формате json
const jsonParser = express.json();
  

app.use(express.static(__dirname + "/p"));

app.post("/user", jsonParser, function (request, response) {
    console.log(request.body);
    if(!request.body) return response.sendStatus(400);
     
    response.json(request.body); // отправляем пришедший ответ обратно
});
  
app.get("/", function(request, response){
      
    response.sendFile(__dirname + '/p/reg.html');
});
  
app.listen(3000);
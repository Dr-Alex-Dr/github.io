const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');



const app = express();

const par = bodyParser.urlencoded({extended: false});

app.use(express.static(__dirname + "/p"));

app.get("/reg.html", par, (req, res) => 
{
	res.sendFile(__dirname + "/reg.html" );
});

app.post("/reg.html", par, (req, res) =>
{

	if(!req.body)
	{
		return res.sendStatus(400);

	}
	console.log(req.body);

	if (`${req.body.pas[0]}` != `${req.body.pas[1]}`)
	{

	res.sendFile(__dirname + "/p/bad-reg.html");

	}
	else
	{
		res.sendFile(__dirname + "/p/ht.html");
	}

	fs.writeFile("p/log.txt", `${req.body.mail} - ${req.body.pas[0]}`, (err) =>
		{
			if(err) throw err;
			console.log("Асинхронная запись файла завершена. Содержимое файла:");
		});
	

});

app.listen(3002);
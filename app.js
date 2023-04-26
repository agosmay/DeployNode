const express =  require("express");

const app = express();


app.get("/", (req,res)=> {
	res.json({
		id: 1,
		name:"prueba"
	})
})

app.listen(3000, ()=> {
	console.log("Servidor online en puerto 3000");
})





import express from "express";
import bodyParser  from "body-parser";
import ejs from "ejs";



const app = express();
const port = 3000;

app.use(express.static('public'))

app.use(bodyParser.urlencoded({ extended: true }));

let newitems=[];

app.get("/",function(req,res){
	const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
	const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

	const d = new Date();
	let name = month[d.getMonth()];
	let name2=daysOfWeek[d.getDay()]; 
	let name3=d.getDate();
	let name4=name3 + " " + name +  " " + name2;
	
	


	res.render("index.ejs",{
		time:name4,
		nam:newitems


	})

	


}) 

app.post("/",function(req,res){
	 let newitem=req.body.input;
	 newitems.push(newitem)
	res.redirect("/",);
	
})


app.listen(port, function () {
	console.log(`Server started on port ${port}`);
});


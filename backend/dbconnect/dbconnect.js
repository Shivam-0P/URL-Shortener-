const mongoose  =  require('mongoose');

async function dbconnect(){
	try{
mongoose.connect(process.env.DATABASE_URL)
.then(()=>console.log("db connect"))
	}catch(err){
		console.log("db not connect")
	}
}


module.exports = dbconnect;
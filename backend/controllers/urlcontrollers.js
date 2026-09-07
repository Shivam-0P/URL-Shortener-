const { nanoid } = require('nanoid')
const  URL = require("../models/Url.js")

async function generateshorturl(req,res){
	const body = req.body;
	if(!body.url){
	return res.status(400).json({
			message:"url is required"
		})
	}
	const shortId = nanoid(8);
	await URL.create({
		shortId:shortId,
		redirectUrl:body.url,
    visithistory:[],
	});

	return res.json({
		id:shortId,
	})
}

module.exports = generateshorturl;
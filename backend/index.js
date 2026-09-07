require("dotenv").config();
const express = require("express");
const urlroutes = require("./routes/urlroutes");
const db = require("./dbconnect/dbconnect");
const URL  = require("./models/Url");
const cors = require("cors");


const app = express();
app.use(cors())
app.use(express.json());
app.use("/url", urlroutes);
db();
app.get("/:shortId", async (req, res) => {
    const shortId = req.params.shortId;

    const entry = await URL.findOneAndUpdate(
        {  shortId},
        {
            $push: {
                visithistory: {
                    timestamp: Date.now(),
                },
            },
        }
    );

    if (!entry) {
        return res.status(404).send("Short URL not found");
    }

    res.redirect(entry.redirectUrl);
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`);
});
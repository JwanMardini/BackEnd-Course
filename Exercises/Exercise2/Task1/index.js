import express, { json } from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from 'url';

const app = express()

const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "form.html"));
})

app.post("/submit", async (req, res) => {
    const jsonFile = JSON.stringify(req.body)
    fs.appendFile(fs.writeFile(path.join(__dirname, "promis.json"), jsonFile)).then(() => console.log("saved data")).catch(() => console.error("something went wrong"))
    await writeAsync(jsonFile)
    res.redirect("/")
})


async function writeAsync(json){
    try{
        fs.writeFile(path.join(__dirname, "asyncAwait.json"), json, (err) => {
            if(err){
                res.status(500).send("something went wrong")
                return
            }
            console.log("data saved")
        })
    }catch{
        console.error("something went wrong")
    }
}

function writeWithPromise(json){
    // let promise = new Promise((resolve, reject) => {
    //     if(json){
    //         fs.writeFile(path.join(__dirname, "promis.json"), json, (err) => {
    //             if(err){
    //                 reject("Something went wrong with writing the file with promises");
    //             } else {
    //                 resolve("data saved with promises");
    //             }
    //         });
    //     } else {
    //         reject("No JSON provided");
    //     }
    // });

    // promise.then((message) => {
    //     console.log(message);
    // }).catch((error) => {
    //     console.error(error);
    // });
}

app.listen(3000, () => {
    console.log("server running on port 3000")
})
import express from "express"
const app = express()

app.get("/films", (req, res) => {

    return res.send() 
})

app.post("/films", (req, res)=> {

    return res.send()
})

app.put("/films/:id", (req, res)=> {
    const filmsId = req.params.id 

    return res.send()
})

app.delete("/films/:id", (req, res)=> {
    const filmsId = req.params.id

    return res.send()
})

app.listen(4000, () =>{
    console.log("Server running");
    
});

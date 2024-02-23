import express  from "express";

const app= express();


const port=process.env.PORT || 8000;
app.get("/",(req, res)=>
{
res.send('<h1>hello</h1>')
})

app.listen(port,()=>
{
    console.log(`listening on port ${port}`);
});



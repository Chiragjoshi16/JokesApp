import express from "express"; 

const app = express();

app.get("/" , (req,res) => {
    res.send("Server Ready");
})

app.get("/api/jokes", (req,res) => {
    const jokes = [
       {
        "id":1,
        "title":"Joke1",
        "content":"first joke"
       },
       {
        "id":2,
        "title":"Joke2",
        "content":"second joke"
       },
       {
        "id":3,
        "title":"Joke3",
        "content":"third joke"
       },
       {
        "id":4,
        "title":"Joke4",
        "content":"forth joke"
       },
       {
        "id":5,
        "title":"Joke5",
        "content":"fifth joke"
       }
    ];
    res.send(jokes);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running at localhost: ${port}`);
})
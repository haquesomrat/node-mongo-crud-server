const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();
const port = process.env.PORT || 3333;

const uri = "mongodb+srv://injam001:AnikaSomrat33@cluster0.puvvt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

/* ------------------
userid:injam001
password:AnikaSomrat33
----------------- */


async function run() {
    try {
        await client.connect();

        const database = client.db('Deadshot');
        const usersCollection = database.collection('users');

        // create a document to insert
        const doc = {
            name: "Injamul Haque Somrat",
            email: "ihsomrat.official@gmail.com",
        }
        const result = await usersCollection.insertOne(doc);
        console.log(result)
        console.log(`Inserted Id:${result.insertId}`)
    }
    finally {
        await client.close();
    }
}


run().catch(console.dir)





app.get('/', (req, res) => {
    res.send('runnign my CRUD server');
});

app.listen(port, () => {
    console.log('Running server on port', port);
});
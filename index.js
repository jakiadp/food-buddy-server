const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
const port = process.env.PORT || 3000;
require('dotenv').config()


// misle layer

app.use(cors());
app.use(express.json());



const uri = "mongodb+srv://food_buddy:7QJaQjO5KizzxAU5@cluster0.mn2bxax.mongodb.net/?appName=Cluster0";




// const uri = `mongodb+srv://${process.env.DB_NAME}:${process.env.DB_NAME}@cluster0.mn2bxax.mongodb.net/?appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);







app.get('/', (req, res) =>{
    res.send('Food buddy app code')
})



app.listen(port, () =>{
    console.log(`Food buddy app is running ${port}`)
})







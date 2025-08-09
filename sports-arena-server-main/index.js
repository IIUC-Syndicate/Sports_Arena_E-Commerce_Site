require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3000;




app.use(express.json());
app.use(cors(
  {
    origin: ['http://localhost:5173', 'https://sports-arena-cb441.web.app', 'https://sports-arena-cb441.firebaseapp.com'], //replace with client address
    credentials: true,
  }
));
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.alvdp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

const run = async () => {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    //await client.connect();

    const database = client.db("SportsArena");

    const reviewsCollection = database.collection("reviews");

    app.get('/reviews', async (req, res) => {
      const result = await reviewsCollection.find().toArray();
      res.send(result);
    });


    const equipmentCollection = database.collection("equipment");
    app.post('/equipment', async (req, res) => {
      const newEquipment = req.body;
      const result = await equipmentCollection.insertOne(newEquipment);
      res.send(result);
    });

    app.get('/equipment', async (req, res) => {
      const result = await equipmentCollection.find().toArray();
      res.send(result);
    });

    app.get('/equipment/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await equipmentCollection.findOne(query);
      if (result) {
        res.send(result);
      } else {
        res.send({message: "Item doesn't exists"});
      }
    });

    app.get('/my-equipment',  async (req, res) => {
      const email = req.query.email;
      const query = { userEmail: email };
      const result = await equipmentCollection.find(query).toArray();
      res.send(result);
    });
    app.delete('/delete-equipment/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await equipmentCollection.deleteOne(query);
      res.send(result);
    });
    
    app.patch('/update-equipment/:id', async (req, res) => {
      const id = req.params.id;
      const updatedEquipment = req.body;
      const query = { _id: new ObjectId(id) };
      const update = {
        $set: updatedEquipment,
      };
      const result = await equipmentCollection.updateOne(query, update);
      res.send(result);
    });
    // Send a ping to confirm a successful connection
    //await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    //await client.close();
  }
}
run().catch(console.dir);

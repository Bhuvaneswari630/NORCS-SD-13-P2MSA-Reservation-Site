import "dotenv/config";
import express from 'express'
import mongoose from 'mongoose'
import campRoutes from './Controllers/camp_controllers.js';

const app = express()
const PORT = process.env.PORT || 8000
const MONGO_URI = "mongodb+srv://admin:password-group-4@mern-campsite-reservati.dg4wdlm.mongodb.net/?retryWrites=true&w=majority"

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use('/camps', campRoutes)

app.get('/', (req, res) => {
  res.send('Welcome to Camping....')
})

mongoose

  .connect(MONGO_URI)

  .then(() => console.log("MongoDB connected"))

  .catch((err) => console.error("MongoDB connection error:", err));

app.listen(PORT, () => {
  console.log('listening on port', PORT);
})
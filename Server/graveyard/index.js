require('dotenv');
dotenv.config();
// express server
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
const PORT = 3001;

//mongodb
import mongoose from "mongoose";
const mongoString = process.env.ATLAS_URI;
mongoose.connect(mongoString);
const database = mongoose.connection

database.on('error', (error) => {
  console.log(error)
});

database.once('connected', () => {
  console.log('MongoDB Connected');
});

//openAI
import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
  organization: process.env.OPENAI_ORG_ID,
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

//express server
app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
   res.json("chatGPT is running!");
});

app.post("/", async (req, res) => {
  //! from the body of the fetch request we take the message(query) and send it to the server in the prompt field
  //TODO  specify the prompt to match the search option and criteria
  //> how can we use the api endpoints to get user specific requests 
  //! wait for the response set that as a message
  // TODO why are we using choices[0]
  const {message} = req.body;
  try {
    const response = await openai.createCompletion(
      {
        model: "text-davinci-003",
        prompt: `I will give you a list of products and only respond the answer and dont add any extra comments:what are the colors and textures present in the ${message} and list the textures as described and remoce the adjectives and list only the colors and textures and remove any products or items associated with the color `,
        max_tokens: 100,
        temperature: 0.5,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        },
      }
    );
    console.log(response.data);
    if (response.data) {
      if (response.data.choices) {
    res.json({
      message: response.data.choices[0].text,
    });
  }
}
  } catch (err) {
    console.log(err);
  }
});
app.listen(PORT, () => {
  console.log(`chatGPT listening on port ${PORT}`);
});
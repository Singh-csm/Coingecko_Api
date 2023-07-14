const express = require("express");
const app = express();
const axios = require("axios");
const coinModel = require("./src/model/coinModel")
const connection = require("./src/db/dbConnection");
const PORT = 3000

app.use(express.json());

connection.connectDB();

app.get("/test", (req, res)=>{
    res.send("ok")
})

app.get('/fetch-coin-data', async (req, res) => {
    try {
      const response = await axios.get('https://api.coingecko.com/api/v3/coins/list?include_platform=true');
      const coins = response.data;
  
      for (const coin of coins) {
        await coinModel.findOneAndUpdate(
          { id: coin.id },
          {
            symbol: coin.symbol,
            name: coin.name,
            platforms: coin.platforms,
          },
          { upsert: true }
        );
      }

     return res.status(200).send({ message: 'Coin data fetched and stored successfully.'});
    } catch (error) {
      console.error('Failed to fetch and store coin data:', error);
      res.status(500).json({ error: 'Failed to fetch and store coin data.' });
    }
  });

app.listen(PORT, ()=>console.log("listening on port", 3000));
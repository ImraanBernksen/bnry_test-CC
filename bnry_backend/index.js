const express = require('express');

const axios = require('axios');

const port = process.env.PORT || 3030;

const newsArticles = '5f1441b653004bdb8851bb7444905c8b';

const app = express();

app.get('/', (req, res) => {
  const url = `https://newsapi.org/v2/everything?q=tesla&sortBy=publishedAt&apiKey=${newsArticles}`;
  axios.get(url)
    .then(response => {
      res.header('Access-Control-Allow-Origin', '*');
      res.json(response.data);
    })
    .catch(error => {
      console.log(error);
      res.status(500).send('THIS IS A ERROR');
    });
});


app.listen(port, () => {
  console.log(`BACKEND PORT IS RUNNING!!! ${port}`);
});
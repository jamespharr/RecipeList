
const express = require("express")
const path = require("path")
const app = express()
const axios = require("axios")

const searchPrefix = 'https://api.edamam.com/search?'

if (process.env.NODE_ENV !== "production") {
  require('dotenv').config()
}
const creds = `&app_id=${process.env.APPID}&app_key=${process.env.APPKEY}`

app.get("/recipes/search/:query", (request, response) => {
  axios.get(`${searchPrefix}q=${request.params.query}${creds}`)
    .then(edamamResponse => response.json(edamamResponse.data.hits || []))
    .catch(err => response.json([]))
})

app.get("/recipes/:id", (request, response) => {
  const url = `${searchPrefix}r=${encodeURIComponent(request.params.id)}${creds}`
  axios.get(url)
    .then(response_ => {
      response.send(response_.data[0]);
    })
    .catch(err => {
      response.json([])
    })
})

if (process.env.NODE_ENV === "production") {
  // Serve any static files
  app.use(express.static(path.join(__dirname, "client/build")))
  // Handle React routing, return all requests to React app
  app.get("*", (request, response) => {
    response.sendFile(path.join(__dirname, "client/build", "index.html"))
  })
}

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`API listening on port ${port}...`)
})

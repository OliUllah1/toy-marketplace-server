const express = require('express')
const app = express()
const port = process.env.PORT || 5000

app.get('/', (req, res) => {
  res.send('toys server is runing')
})

app.listen(port, () => {
  console.log(`toys server is runing on port ${port}`)
})
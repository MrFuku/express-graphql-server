const express = require('express')
const mongoose = require('mongoose')
const graphqlHTTP = require('express-graphql')
const schema = require('./schema/schema')
const app = express()

const user = 'user'
const pass = 'password'
mongoose.connect(`mongodb://${user}:${pass}@mongo/test`)
mongoose.connection.once('open', () => {
  console.log('connected mongoDB')
})
app.get('/', (req, res) => res.send('Hello World!'))
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true,
  })
)

app.listen(4000, () => console.log('Example app listening on port 4000!'))

const express = require('express')
const graphqlHTTP = require('express-graphql')
const app = express()
const cors = require('cors')

app.use(cors())

const schema = require('./schema')

app.use('/graphql', graphqlHTTP ({
  schema,
  graphiql: true
}))

app.listen(1000)
console.log('Running Successfully')
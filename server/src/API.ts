import express, { Request, Responce } from 'express'
import cors from 'cors'

import storage from './utils/storage'
import { AnswerType } from './types/answer.type'


const app = express()
app.use(cors())
app.use(express.json())

const { API_PORT } = process.env


app.post('/answer', async (
  request: Request<{}, {}, { answer: AnswerType }>,
  response
) => {
  const { body: { answer } } = request
  storage.push('answers.json', answer)

  response.send(true)
})

app.get('/answers', async (request: Request, response: Responce) => {
  response.send(storage.read('answers.json'))
})


const initAPI = () => {
  app.listen(API_PORT, () => console.log(`Running on port ${API_PORT}`))
}


export {
  initAPI
}

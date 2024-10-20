import express from 'express'
import cors from 'cors'
import env from 'dotenv'
import authPage from './routes/authRouth.js'
import testData from './routes/testData.js'
import postRoute from './routes/postRoute.js'

const app = express()
env.config()
const PORT = process.env.PORT

app.use(cors())
app.use(express.json({
    limit : "100mb"
}))

app.use(authPage)
app.use(testData)
app.use(postRoute)

app.listen(PORT, () =>   {
    console.info(
    `
    =======================
    SERVER RUN DEV ${PORT}
    =======================
    `
    )
})
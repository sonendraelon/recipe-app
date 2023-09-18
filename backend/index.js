const express = require('express')
const cors  = require('cors')
const mongoose = require('mongoose')
const userRouter = require('./Routes/auth')
const cookeParser = require('cookie-parser')
const RecipeModel = require('./models/Recipe')
const recipeRouter = require('./Routes/recipe')

const app = express()

app.use(cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST"],
    credentials : true
}))
app.use(cookeParser())
app.use(express.json())
app.use('/auth', userRouter)
app.use('/Recipe', RecipeModel)
app.use('/recipe', recipeRouter)

mongoose.connect('mongodb+srv://sonendraelon:tesla1234@cluster0.gy0hpzs.mongodb.net/practice?retryWrites=true&w=majority')



app.listen(3001, () => {
    console.log("Server is running")
})
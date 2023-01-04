import mongoose, { Model } from "mongoose"

// CONNECTING TO MONGOOSE (Get Database Url from .env.local)
const { DATABASE_URL } = process.env

// connection function
export const connect = async () => {

  if(!DATABASE_URL){
    throw new Error(
        "Please define the DATABASE_URL value in your .env file"
    )
  }

  const conn = await mongoose
    .connect(DATABASE_URL as string)
    .catch(err => console.log(err))
  console.log("Mongoose Connection Established")

  // OUR TODO SCHEMA
  const TodoSchema = new mongoose.Schema({
    name: String,
  })

  // OUR TODO MODEL
  const Todo = mongoose.models.Todo || mongoose.model("Todo", TodoSchema)

  return { conn, Todo }
}

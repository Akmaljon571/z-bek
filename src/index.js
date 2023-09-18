// Import 
import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import ejs from "ejs"
import mongoose from "mongoose"
import path from "path"
import routes from "./routes/routes.js"
import { ErrorHandle } from "./Error/error.middleWare.js"
import cookieParser from "cookie-parser"
dotenv.config()
const PORT = process.env.PORT || 7071

// App setting
const app = express()
app.set("view engine", "ejs")
app.set("views", path.join(process.cwd(), "src", "views"))
app.use(express.static(path.join(process.cwd(), "src", "public")))
app.use("/upload", express.static(path.join(process.cwd(), "src", "upload")))

// MiddleWare
app.use(cors())
app.use(cookieParser())
app.use(express.json())
app.use(routes)
app.use(ErrorHandle)
app.all("/*", (_, res) => res.sendStatus(404))

const main = async () => {
    try {
        await mongoose.connect(process.env.DB, {
            useNewUrlParser: true
        })
        .then(() => console.log('Mongoose Run'))
        .catch((error) => console.log(error))
        app.listen(PORT, console.log('Server RUN'))
    } catch (error) {
        console.log(error)
    }
}

main()
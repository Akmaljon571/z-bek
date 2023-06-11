import { Router } from "express"
import { all, create, deletePage, game, gamex10, home, update } from "../controller/home.js"
import { createWord, removeWord, updateWord } from "../controller/translate.js"

const resolt = Router()

export default resolt
   .get("/", home)
   .get("/all", all)
   .get("/game", game)
   .get("/gamex10", gamex10)
   .get("/create", create)
   .get("/update", update)
   .get("/delete", deletePage)
   .post("/create-word", createWord)
   .put("/update-word/:id", updateWord)
   .delete("/remove-word/:id", removeWord)
   
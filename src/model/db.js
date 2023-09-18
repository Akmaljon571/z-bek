import { Schema, model } from 'mongoose'

const DB = new Schema({
    id: Number,
    ru: String,
    uz: String
})

export default model('DB', DB)

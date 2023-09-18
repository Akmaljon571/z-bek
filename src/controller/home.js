import db from "../model/db.js"

export const home = async (_, res) => {
    const find = await db.find()
    const all = find.length
    res.render('home.ejs', { all })
}

export const all = async (_, res) => {
    const find = await db.find()
    const all = find.sort((a, b) => a.id - b.id)
    res.render('all.ejs', { all })
}

export const create = async (_, res) => {
    res.render('create.ejs')
}

export const deletePage = async (_, res) => {
    const find = await db.find()
    const all = find.sort((a, b) => a.id - b.id)
    res.render('delete.ejs', { all })
}

export const update = async (_, res) => {
    const find = await db.find()
    const all = find.sort((a, b) => a.id - b.id)
    res.render('update.ejs', { all })
}

export const game = async (req, res) => {
    const all = await db.find()
    const lang = req.query?.lang || 'en'

    const find = all[Math.floor(Math.random() * all.length)]
    res.render('game.ejs', { find, lang })
}

export const gamex10 = async (req, res) => {
    const findDb = await db.find()
    const allWord = findDb.sort((a, b) => a.id - b.id)
    const all = allWord.slice(allWord.length - 11, -1)
    const lang = req.query?.lang || 'en'

    const find = all[Math.floor(Math.random() * all.length)]
    res.render('gamex10.ejs', { find, lang })
}
import { read } from "../utils/FS.js"

export const home = async (_, res) => {
    const all = read('db.json')?.length
    res.render('home.ejs', { all })
}

export const all = async (_, res) => {
    const all = read('db.json').sort((a, b) => a.id - b.id)
    res.render('all.ejs', { all })
}

export const create = async (_, res) => {
    res.render('create.ejs')
}

export const deletePage = async (_, res) => {
    const all = read('db.json').sort((a, b) => a.id - b.id)
    res.render('delete.ejs', { all })
}

export const update = async (_, res) => {
    const all = read('db.json').sort((a, b) => a.id - b.id)
    res.render('update.ejs', { all })
}

export const game = async (req, res) => {
    const all = read('db.json')
    const lang = req.query?.lang || 'en'

    const find = all[Math.floor(Math.random() * all.length)]
    res.render('game.ejs', { find, lang })
}

export const gamex10 = async (req, res) => {
    const all = read('db.json').sort((a, b) => a.id - b.id).slice(0, 10)
    const lang = req.query?.lang || 'en'

    const find = all[Math.floor(Math.random() * all.length)]
    res.render('gamex10.ejs', { find, lang })
}
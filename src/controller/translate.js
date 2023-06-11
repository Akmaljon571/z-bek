import { read, write } from "../utils/FS.js";

export const createWord = (req, res) => {
    const alldata = read('db.json')
    const newObj = {
        id: Number(alldata?.at(-1)?.id) + 1 || 1,
        en: req.body?.en,
        uz: req.body?.uz
    }
    alldata.push(newObj)
    write('db.json', alldata)
    res.render("create.ejs")
}

export const updateWord = (req, res) => {
    const { id } = req.params
    const alldata = read('db.json')
    const find = alldata.find(e => e.id == id)
    const newObj = {
        id: id,
        en: req.body?.en || find.en,
        uz: req.body?.uz || find.uz
    }
    write('db.json', alldata.map(e => e.id == id ? newObj : e))
    res.render("create.ejs")
}

export const removeWord = (req, res) => {
    const { id } = req.params
    const newDb = read("db.json").filter(e => e?.id != id)
    write("db.json", newDb)
    const all = read('db.json').sort((a, b) => a.id - b.id)
    res.render('delete.ejs', { all })
}

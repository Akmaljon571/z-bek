import db from "../model/db.js"

export const createWord = async (req, res) => {
    const alldata = await db.find()
    const newObj = new db({
        id: Number(alldata?.at(-1)?.id) + 1 || 1,
        ru: req.body?.en,
        uz: req.body?.uz
    })
    await newObj.save()

    res.render("create.ejs")
}

export const updateWord = async (req, res) => {
    const { id } = req.params
    const findData = await db.findOne({ id })
    findData.ru = req.body?.en || find.ru
    findData.uz = req.body?.uz || find.uz
    await db.findOneAndUpdate(findData._id, findData)
    
    res.render("create.ejs")
}

export const removeWord = async (req, res) => {
    const { id } = req.params
    const delDb = await db.findOne({ id })
    await db.findByIdAndDelete(delDb._id)
    const all = await db.find()
    res.render('delete.ejs', { all })
}

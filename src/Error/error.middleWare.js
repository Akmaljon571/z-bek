export const ErrorHandle = (err, _, res, __) => {
    return res.render(err.ejs, {
        message: err.message,
        status: err.status
    })
}
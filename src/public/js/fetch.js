const eng = document.querySelector('.inputEnglish')
const uzb = document.querySelector('.inputUzbek')
const bad = document.querySelector('.badMessage')
const good = document.querySelector('.goodMessage')
const span = document.querySelector('.message-span')
const del = document.querySelector('.del')

const delWord = (id) => {
    fetch("/remove-word/" + id, { method: "DELETE" })
    .then(() => {
        del.className = 'del'
        span.className = 'message-span none'
    })
}

const addWord = () => {
    if (eng.value == '' || uzb.value == '') {
        bad.className = 'badMessage'
        span.className = 'message-span'
    } else {
        fetch('/create-word', {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                en: eng.value,
                uz: uzb.value,
            })
        })
            .then(data => {
                if (data.ok) {
                    good.className = 'goodMessage'
                    span.className = 'message-span'
                } else {
                    bad.className = 'badMessage'
                    span.className = 'message-span'
                }
            })
    }
}

const goodMessage = () => {
    if (good.className == 'goodMessage') {
        good.className = 'goodMessage none'
        span.className = 'message-span none'
    }
    eng.value = ''
    uzb.value = ''
}

const deleteMessage = () => {
    if (del.className == 'del') {
        del.className = 'del none'
        span.className = 'message-span none'
        location.reload(true)
    }
}

const badMessage = () => {
    if (bad.className == 'badMessage') {
        bad.className = 'badMessage none'
        span.className = 'message-span none'
    }
    eng.value = ''
    uzb.value = ''
}

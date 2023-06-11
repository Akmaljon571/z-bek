const bad = document.querySelector('.badMessage')
const good = document.querySelector('.goodMessage')
const span = document.querySelector('.message-span')

const eskiData = (eski) => {
    if (eski) {
        const svg = document.getElementById(`${eski}_svg`)
        if (svg?.id) {
            const eskiEn = document.getElementById(`${eski}_en`)
            const eskiUz = document.getElementById(`${eski}_uz`)
            const open1 = document.getElementById(`${eski}_open1`)
            const open2 = document.getElementById(`${eski}_open2`)
            const btn = document.getElementById(`${eski}_btn`)
            
            svg.className = ''
            eskiEn.className = ''
            eskiUz.className = ''
            
            btn.className = 'none'
            open1.className = 'none'    
            open2.className = 'none'
        }
    }
}

const updateWord = (id) => {
    const eski = JSON.parse(localStorage.getItem('updateSon')) || null
    
    eskiData(eski)

    const eskiEn = document.getElementById(`${id}_en`)
    const eskiUz = document.getElementById(`${id}_uz`)
    const open1 = document.getElementById(`${id}_open1`)
    const open2 = document.getElementById(`${id}_open2`)
    const btn = document.getElementById(`${id}_btn`)
    const svg = document.getElementById(`${id}_svg`)
    
    svg.className = 'none'
    eskiEn.className = 'none'
    eskiUz.className = 'none'
    
    btn.className = 'updateBtn'
    open1.className = ''
    open2.className = ''
    localStorage.setItem('updateSon', JSON.stringify(id))
}

const fetchUpdate = (id) => {
    const eng = document.getElementById(`${id}_inputEn`)
    const uzb = document.getElementById(`${id}_inputUz`)
    const eski = JSON.parse(localStorage.getItem('updateSon')) || null
    if (eng.value == '' || uzb.value == '') {
        bad.className = 'badMessage'
        span.className = 'message-span'
        eskiData(eski)
    } else {
        fetch('/update-word/'+id, {
            method: "PUT",
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
                    eskiData(eski)
                }
            })
    }
}

const goodMessage = () => {
    if (good.className == 'goodMessage') {
        good.className = 'goodMessage none'
        span.className = 'message-span none'
    }
    location.reload(true)
}

const badMessage = () => {
    if (bad.className == 'badMessage') {
        bad.className = 'badMessage none'
        span.className = 'message-span none'
    }
    location.reload(true)
}

let app = document.querySelector('.app')
let counter = document.querySelector('.counter')
let btn = document.querySelector('.btn')

let keyboardKeys = [9, 20, 16, 17, 91, 32, 92, 93, 13, 8, 27, 18]

btn.addEventListener('click', startGame)

function startGame() {
    app.innerHTML = ''
    let promice = getWord()
    promice.then(slovo)
}
startGame()

let count = 5
counter.innerHTML = count

function slovo(data) {

    let string = data.puzzle
    let mas = [...string]
    let masT = []

    mas.forEach(item => {
        if (item !== ' ') {
            masT.push('*')
        }
        else {
            masT.push(' ')
        }
    })

    masT.forEach(item => {
        let spn = document.createElement('span')
        spn.innerHTML = item
        app.appendChild(spn)
    })

    window.addEventListener('keydown', function (e) {
        let g = 0

        for (let i of keyboardKeys) {
            if (e.which == i) {
                return
            }
        }

        mas.forEach((item, i) => {
            if (e.key === item) {
                masT[i] = item
                g++
            }
        })

        if (masT.join('') === string) {
            add(masT)
            counter.innerHTML = 'Поздравляю, ты отгадал слово'
            return
        }

        if (g == 0) {
            count--
        }

        if (count <= 0) {
            counter.innerHTML = `Вы проиграли, правильный ответ: ${string}`
            return
        }
        else {
            counter.innerHTML = count
        }

        add(masT)

    })
}

function add(masT) {
    app.innerHTML = ''
    masT.forEach(item => {
        let spn = document.createElement('span')
        spn.innerHTML = item
        app.appendChild(spn)
    })
}
let zero = document.getElementById("zero");
let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");
let five = document.getElementById("five");
let six = document.getElementById("six");
let seven = document.getElementById("seven");
let eight = document.getElementById("eight");

let resetbtn = document.getElementById("resetbtn");
let res = document.getElementById("res")

let buttons = document.querySelectorAll("button:not(#resetbtn)")

let win = document.getElementById("win")

let flag = true


function newGame() {
    buttons.forEach((button) => {
        button.disabled = false;
        button.innerHTML = "";
    })
    flag = true;
}
function showWinnner() {
    let div = document.createElement("div")
    let div1 = document.createElement("div")
    let h1 = document.createElement("h1")
    let a = document.createElement("a")
    let i = document.createElement("i")
    let restartBtn = document.createElement("button")
    let restartBtn2 = document.createElement("button")

    restartBtn.innerText = "Restart"
    restartBtn2.innerText = "Restart"

    if (flag == false) {
        h1.innerText = "Winner is X"
    } else {
        h1.innerText = "Winner is O"
    }

    div.setAttribute("id", "winner")
    div1.setAttribute("id", "ii")
    a.setAttribute("href", "#currentGame")
    i.setAttribute("class", "fa-solid fa-down-long")
    restartBtn.setAttribute("id", "restart")
    restartBtn2.setAttribute("id", "restart")

    a.appendChild(i)
    div1.appendChild(a)

    div.appendChild(h1)
    div.appendChild(restartBtn)
    div.appendChild(div1)

    win.appendChild(div)

    resetbtn.remove()
    res.appendChild(restartBtn2)

    win.scrollIntoView({ behavior: "instant", block: 'start' });

    restartBtn.addEventListener("click", () => {
        win.innerHTML = ""
        res.appendChild(resetbtn)
        restartBtn2.remove()
        newGame()
    })
    restartBtn2.addEventListener("click", () => {
        win.innerHTML = ""
        res.appendChild(resetbtn)
        restartBtn2.remove()
        newGame()
    })

}
const draw = () => {
    let div = document.createElement("div")
    let div1 = document.createElement("div")
    let h1 = document.createElement("h1")
    let a = document.createElement("a")
    let i = document.createElement("i")
    let restartBtn = document.createElement("button")
    let restartBtn2 = document.createElement("button")

    restartBtn.innerText = "Restart"
    restartBtn2.innerText = "Restart"

    h1.innerText = "Game Draw"

    div.setAttribute("id", "winner")
    div1.setAttribute("id", "ii")
    a.setAttribute("href", "#currentGame")
    i.setAttribute("class", "fa-solid fa-down-long")
    restartBtn.setAttribute("id", "restart")
    restartBtn2.setAttribute("id", "restart")

    a.appendChild(i)
    div1.appendChild(a)

    div.appendChild(h1)
    div.appendChild(restartBtn)
    div.appendChild(div1)

    win.appendChild(div)

    resetbtn.remove()
    res.appendChild(restartBtn2)

    win.scrollIntoView({ behavior: "instant", block: 'start' });

    restartBtn.addEventListener("click", () => {
        win.innerHTML = ""
        res.appendChild(resetbtn)
        restartBtn2.remove()
        newGame()
    })
    restartBtn2.addEventListener("click", () => {
        win.innerHTML = ""
        res.appendChild(resetbtn)
        restartBtn2.remove()
        newGame()
    })
}


function winnerr() {
    if (((zero.innerText == one.innerText) && (one.innerText == two.innerText) && (one.innerText != "")) ||
        ((three.innerText == four.innerText) && (four.innerText == five.innerText) && (four.innerText != "")) ||
        ((six.innerText == seven.innerText) && (seven.innerText == eight.innerText) && (seven.innerText != ""))) {
        showWinnner();
        buttons.forEach((button) => {
            button.disabled = true;
        })
    } else if (((zero.innerText == three.innerText) && (three.innerText == six.innerText) && (three.innerText != "")) ||
        ((one.innerText == four.innerText) && (four.innerText == seven.innerText) && (four.innerText != "")) ||
        ((two.innerText == five.innerText) && (five.innerText == eight.innerText) && (five.innerText != ""))) {
        showWinnner();
        buttons.forEach((button) => {
            button.disabled = true;
        })
    } else if (((zero.innerText == four.innerText) && (four.innerText == eight.innerText) && (four.innerText != "")) ||
        ((two.innerText == four.innerText) && (four.innerText == six.innerText) && (four.innerText != ""))) {
        showWinnner();
        buttons.forEach((button) => {
            button.disabled = true;
        })
    }
    else if (true) {
        let isdraw = true
        buttons.forEach((button) => {
            if (button.innerText === "") {
                isdraw = false
            }
        })

        if (isdraw) {
            draw()
        }
    }
}

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        if (button.innerHTML === "") {
            button.innerText = flag ? "X" : "O"
            flag = !flag
        }
        winnerr();
    })
})

resetbtn.addEventListener("click", (e) => {
    newGame()
})
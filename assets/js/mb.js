function responce() {
    let x = document.querySelector("#mytopnav")

    if (x.className === "topnav") {
        x.className += " responsive";
    }
    else {
        x.className = "topnav";
    }

    let y = document.querySelector(".navbar")
    if (y.className === "navbar") {
        y.className += " all"
    }
    else {
        y.className = "navbar";
    }
    // let logo = document.querySelector(".logo")
    // let img = document.querySelector("img")
    // img.remove()
    // logo.insertAdjacentHTML("beforeend", `<img src="./assets/img/logo_2.svg" />`)
}

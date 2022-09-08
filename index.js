const pages = document.querySelectorAll("div.page")
let   index = 0

function SetPage() {
    pages.forEach(x => {
        if(x != pages[index]) {
            x.style.display = "none"
        }
    })
}

SetPage()
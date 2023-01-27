const enhance = id => {
    const element = document.getElementById(id), text = element.innerHTML.split("");

    element.innerText = "";

    text.forEach(letter => {
        const span = document.createElement("span");

        span.className = "letter";
        span.innerText = letter;

        element.appendChild(span)

    })
}

enhance("link")

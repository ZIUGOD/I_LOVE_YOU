const body = window.document.getElementById("body");
const title = window.document.getElementById("title");
const caption = window.document.getElementById("caption");
const date_html = window.document.getElementById("date");
const now = new Date();
const week = [
    "domingo", "segunda-feira",
    "terça-feira", "quarta-feira",
    "quinta-feira", "sexta-feira",
    "sábado",
];
const month = [
    "janeiro", "fevereiro", "março", "abril",
    "maio", "junho", "julho", "agosto",
    "setembro", "outubro", "novembro", "dezembro",
];

function actual_date() {
    let actual_day = now.getDate();
    let actual_month = month[now.getMonth()];
    let actual_year = now.getFullYear();

    let actual_hour = now.getHours();
    let actual_minutes = now.getMinutes();
    let actual_seconds = now.getSeconds();

    if (actual_day < 10) {
        actual_day = `0${actual_day}`;
    }

    if (actual_hour < 10) {
        actual_hour = `0${actual_hour}`;
    }

    if (actual_minutes < 10) {
        actual_minutes = `0${actual_minutes}`;
    }

    if (actual_seconds < 10) {
        actual_seconds = `0${actual_seconds}`;
    }

    setTimeout(() => {
        she_said_yes_at = `No dia ${actual_day} de ${actual_month} de ${actual_year}, ${week[now.getDay()]},\n 
        às ${actual_hour}h ${actual_minutes}m ${actual_seconds}s, ela disse SIM!`;

        date_html.innerText = she_said_yes_at;

        console.log(she_said_yes_at);
    }, 41000);
}


function random_int(min, max) {
    if (max < min) {
        [max, min] = [min, max];
    }

    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function add_img() {
    const image = new Image(64, 64); // Largura (width) e altura (height).
    image.src = "assets/images/heart_gif.gif";

    image.classList.add("heart-image");

    image.style.position = "absolute";
    image.style.opacity = `0.${random_int(1, 100)}`
    image.style.left = String(random_int(10, 90)) + "vw";
    image.style.top = String(random_int(10, 90)) + "vh";

    body.append(image);
}


let container_buttons = window.document.getElementById("container-buttons");

// creating buttons
let btn_no = document.createElement("button");
let btn_yes = document.createElement("button");

btn_no.type = "button";
btn_no.innerHTML = "Não";
btn_no.id = "btn-no";
btn_no.onmouseover = () => {
    btn_no.style.position = "absolute";
    btn_no.style.left = `${random_int(5, 88)}vw`;
    btn_no.style.top = `${random_int(22, 66)}vh`;
};
btn_no.onclick = () => {
    btn_no.style.left = String(random_int(5, 88)) + "vw";
    btn_no.style.top = String(random_int(22, 66)) + "vh";
};

btn_yes.type = "button";
btn_yes.innerHTML = "Sim";
btn_yes.id = "btn-yes";
btn_yes.onclick = () => {
    btn_no.parentNode.removeChild(btn_no);
    btn_yes.parentNode.removeChild(btn_yes);

    title.innerText = "";
    caption.innerText = "";

    setTimeout(() => {
        title.innerText = `❤ Obrigado por confiar em mim ❤`;
        caption.innerText = `Prometo te fazer a mulher mais feliz do mundo!!!`
    }, 1000);


    setTimeout(() => {
        for (let i = 0; i < 15; i++) {
            setTimeout(add_img, i * 300);
        }
    }, 5000);


    setTimeout(() => {
        window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ");

    }, 30000);

    actual_date();
};


setTimeout(() => {
    title.innerText = "Karolayne...";

    setTimeout(() => {
        caption.innerText = "Você aceita namorar comigo?";

        setTimeout(() => {
            container_buttons.appendChild(btn_yes);
            container_buttons.appendChild(btn_no);
        }, 1750);
    }, 2500);
}, 1300);


const data = [
    { name: 'Ishanvi', email: 'ishanvi@gmail.com', city: 'Ghaziabad'},
    { name: 'Kshitiz', email: 'kshitiz@gmail.com', city: 'Delhi'},
    { name: 'Asmit', email: 'asmit@gmail.com', city: 'Kanpur'},
    { name: 'Arpit', email: 'arpit@gmail.com', city: 'Jalaun'},
    { name: 'Anisha', email: 'anisha@gmail.com', city: 'Ghaziabad'}
];

const root = document.getElementById('parent');

data.forEach((elem) => {
    const newCard = document.createElement('div');
    newCard.addEventListener("click", () => {
        newCard.style.backgroundColor = getRandomColor();
    });
    //setAttribute
    //classList.add
    newCard.className = 'card';
    newCard.innerHTML = `
        <h4>${elem.name}</h4>
        <h6>${elem.email}</h6>
        <p class='text'>${elem.city}</p>
    `;
    root.appendChild(newCard);
})

const getRandomColor = () => {
    const randomRed = Math.floor(Math.random() * 255);
    const randomGreen = Math.floor(Math.random() * 255);
    const randomBlue = Math.floor(Math.random() * 255);
    return `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;
}

const body = document.querySelector('body');
const handleBgChange = () => {
    console.log("Button Clicked");
    //Logic to change background color
    body.style.backgroundColor = getRandomColor();;
}

const textElement = document.querySelectorAll('.text');
textElement.forEach((p) => {
    p.addEventListener('click', (event) => {
        event.stopPropagation();
        p.style.backgroundColor = getRandomColor();
    },false);
});
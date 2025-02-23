const data = [
    { id: '1', name: 'Ishanvi', email: 'ishanvi@gmail.com', city: 'Ghaziabad'},
    { id: '2', name: 'Kshitiz', email: 'kshitiz@gmail.com', city: 'Delhi'},
    { id: '3', name: 'Asmit', email: 'asmit@gmail.com', city: 'Kanpur'},
    { id: '4', name: 'Arpit', email: 'arpit@gmail.com', city: 'Jalaun'},
    { id: '5', name: 'Anisha', email: 'anisha@gmail.com', city: 'Ghaziabad'}
];

const root = document.getElementById("root");

// Perform the select option based on the cities and add new city in the option field

const selectElement = document.getElementsByTagName("select")[0];

const showOptions = () => {
    const selectedCity = selectElement.value; // Store the current selected value
    selectElement.innerHTML = ""; // Clear existing options
    
    const citiesObj = {};
    data.forEach((elem) => {
        citiesObj[elem.city] = true
    });

    console.log(data);

    const cities = Object.keys(citiesObj);
    cities.forEach((city) => {
        const newOption = document.createElement("option");
        newOption.value = city;
        newOption.innerHTML = city;
        selectElement.appendChild(newOption);
    });

    // Ensure the selected city remains the same after re-rendering options
    if (cities.includes(selectedCity)) {
        selectElement.value = selectedCity;
    } else {
        selectElement.value = cities[0]; // Set default to the first available city
    }
}
//Display the card container in the browser
const showCards = (newData) => {
    showOptions();
    root.innerHTML = "";
    newData.forEach((elem) => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
        <h5>Id : ${elem.id}</h5>
        <h4>${elem.name}</h4>
        <h6>${elem.email}</h6>
        <p>${elem.city}</p>
        <button onclick="deleteCard(event,'${elem.id}')">Delete</button>
        `;
        root.appendChild(card);
    })
}

const deleteCard = (e, id) => {
    // Delete the card container
    //e.target.parentElement.remove();
    console.log(e, id);
    e.target.parentElement.remove();
    data.forEach((elem, index) => {
        if (elem.id == id) {
            data.splice(index, 1);
            console.log('===')
        }
    })
    showOptions()
}


// Based on select option display only the cards with city same as the selected city
const handleSelect = (e) => {
    const selectedCity = e.target.value;
    const newData = data.filter((elem) => {
        if (elem.city == selectedCity) return true;
        return false;
    })
    showCards(newData);
}

// Handle the form submit event
const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    const id = e.target.id.value;
    const name = e.target.fullname.value;
    const city = e.target.city.value;
    const email = e.target.email.value;
    console.log(id, name, email, city);


    // Check if the email already exists then dont enter the data
    const emailExists = data.find((elem) => {
        if (elem.email == email) return true;
        return false;
    })

    // Checking for the existence of the same email. If it exists then return from the function and alert the user

    if (emailExists) {
        alert("Email already exists");
        return;
    }
    // Add the new element to the data array
    const newElem = {
        id: e.target.id.value,
        name: e.target.fullname.value,
        city: e.target.city.value,
        email: e.target.email.value
    }
    data.push(newElem);
    showCards(data);
    alert("Data added successfully");
    e.target.reset();
}

showCards(data);
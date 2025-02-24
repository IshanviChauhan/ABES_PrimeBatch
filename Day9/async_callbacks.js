//Async callbacks

//1. Event listener

/*
console.log("Start");

const handleInnerCall = () => {
    console.log("Step Y");
};

const handleCall = () => {
    console.log("Step M");

    handleInnerCall();

    console.log("Step N");
};

document.querySelector("body").addEventListener('click',handleCall);

console.log("End");
*/

/*-------------------------------------------------------------------------*/
//2. Set timeout

//setTimeout is a function that takes two arguments, a function and a time in milliseconds.
//It is a function given by browser object window.

/*
console.log("Start");

const handleInnerCall = () => {
    console.log("Step Y");
}

const handleCall = () => {
    console.log("Step M");
    handleInnerCall();
    console.log("Step N");
}

setTimeout(handleCall, 10000); 

console.log("End");
*/

/*
console.log("Start");

const handleInnerCall = () => {
    console.log("Step Y");
}

const handleCall = () => {
    console.log("Step M");
    handleInnerCall();
    console.log("Step N");
}

setTimeout(handleCall, 0); 

console.log("End");
*/

/*
console.log("A");

const handleCall = () => {
    console.log("H");
};

setTimeout(() => {
    console.log("N");

    setTimeout (() => {
        console.log("P");
    },0);

    handleCall();

    console.log("B");
},5000);

console.log("C");
*/

/*-------------------------------------------------------------------------*/

/*
    Hyderabad : Take user credentials and authenticate 
    -> handleUser()

    Noida : Make the payment from the wallet by doing the required checks 
    -> handlePayment()

    Bangalore : To handle these two teams and implement wallet functionality
    CASE 1 (Requirement)
    -> const userId = handleUser()
    -> if (userId){
        -> const resp = handlePayment(userId)
        -> console.log(resp)
    }
    -> else{
        console.log("Invalid Details")
    }

    #Using callbacks
    -> const resp = handleUser(handlePayment)
                What is the team calls handlePayement 2 times?
                or even with wrong credentials
                or never calls it
    -> console.log(resp)

    #Using promises
    promise object represents the eventual completion or failure of an asynchronous operation and its resulting value. 
    -> const resp = handleUser() -> returns a promise
    -> THEN{
        -> const resp = handlePayment(userId)
        -> console.log(resp)
    }
    -> CATCH{
        console.log("Invalid Details")
    }

*/
    

//PROMISES: fetch()
//https://api.github.com/users/IshanviChauhan
const getData = (e) => {
    const idNumber = Number(e.target.value) - 1;
    const pro = fetch('https://dummyjson.com/recipes');
    pro.then((a)=>{
        console.log("a",a);
        const pr2=a.json();
        pr2.then((data)=>{
            //console.log(data);
            showUI(data);
        }).catch((e)=>{
            console.log("pr2 error",e);
        })
    }).catch((b)=>{
        console.log("b error",b)
        const pr3=b.json();
        pr3.then((data)=>{
            console.log(data);
        }).catch((e)=>{
            console.log("pr3 error :",e);
        });
        console.log(data);
    });
    //fetch() returns a promise.


    function showUI (data) {
        //responsible for creating a visualization
        console.log("data:",data);
        const pro = data.recipes;
        console.log(pro[idNumber]);
        const card = document.getElementById("card");
        card.innerHTML = `
            <h3>${pro[idNumber].id}</h3>
            <p>${pro[idNumber].name}</p>  
            <p>${pro[idNumber].ingredients}</p>
            <img src="${pro[idNumber].image}" alt="product image">
        `;

        storeData(data);
    }
    console.log("pro :",pro);
}

function storeData(data){
    localStorage.setItem("recipes",JSON.stringify(data)); //Key,value
}
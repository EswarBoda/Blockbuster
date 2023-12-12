
// myInfo object to store in the local storage
let myInfoObj = {
    name: "",
    email: "",
    rewards: "",
}

// hide results form at the beginning, until results are ready to be shown
const resultsForm = document.getElementById("myinfo-movie-results-form");
displayMyInfo();

const form = document.getElementById("contact-form");
form.style.display = "none"; // hide the form

// Name field
const fullName = document.getElementById("name");
fullName.attributes.required = true;

// email field
const email = document.getElementById("email");
email.attributes.required = true;

const rewards = document.getElementById("rewards");
const rewardsNumber = document.getElementById("rewards-number");

let validInput = false;

// check that user has entered minimum number of characters
const validateLength = (fullName, min) => {
    if (fullName.value.trim().length >= min) {
        fullName.parentElement.classList.remove('invalid');
        validInput = true;
    } else {
        fullName.parentElement.classList.add('invalid');
        console.log(`Minimum ${min} no.of characters required for the input field.`)
        validInput = false;
    }
}

// validate email
const validateRegEx = (regex, urlRegex = false) => {
    let re = /\w+@\w+\.\w+/; // use email regex by default

    if (re.test(regex.value.trim())) {
        regex.parentElement.classList.remove('invalid');
        validInput = true;
    } else {
        regex.parentElement.classList.add('invalid');
        console.log(`incorrect format, please enter a valid input`)
        validInput = false;
    }
}

// show & hide Rewards number field based on rewards yes or no selection
const handleRewardsOption = (rewards) => {
    if (rewards.value === 'Yes') {
        rewardsNumber.parentElement.classList.remove('hidden');
    } else if (rewards.value === 'No') {
        rewardsNumber.parentElement.classList.add('hidden');
    }
};

function displayMyInfo() {
    const myInfoObjReadFromLocalStorage = JSON.parse(localStorage.getItem("My-Info"));
    const name = myInfoObjReadFromLocalStorage.name;
    const email = myInfoObjReadFromLocalStorage.email;
    const rewardsNum = myInfoObjReadFromLocalStorage.rewards;

    document.getElementById("dname").value = name;
    document.getElementById("demail").value = email;
    if (rewardsNum) {
        document.getElementById("drewards").value = rewardsNum;
    }

    console.log('myInfoObjReadFromLocalStorage: ', myInfoObjReadFromLocalStorage);

    // display saved movie results from the local storage
    const movieResultsReadFromLocalStorage = JSON.parse(localStorage.getItem("movie-matches"));
    if (movieResultsReadFromLocalStorage.length == 0) {
        alert('No saved movie results found');
    } else {
        console.log('movieResultsReadFromLocalStorage', movieResultsReadFromLocalStorage);
        const ulEl = document.getElementById("movie-results-list");
        for (let i = 0; i < movieResultsReadFromLocalStorage.length; i++) {
            const liEl = document.createElement('li');
            liEl.innerHTML = movieResultsReadFromLocalStorage[i];
            ulEl.appendChild(liEl);
        }
    }

    // display saved game results from the local storage
    const gameResultsReadFromLocalStorage = JSON.parse(localStorage.getItem("game-matches"));
    if (gameResultsReadFromLocalStorage.length == 0) {
        alert('No saved game results found');
    } else {
        console.log('gameResultsReadFromLocalStorage', gameResultsReadFromLocalStorage);
        const ulEl = document.getElementById("game-results-list");
        for (let j = 0; j < gameResultsReadFromLocalStorage.length; j++) {
            const gameLi = document.createElement('li');
            gameLi.innerHTML = gameResultsReadFromLocalStorage[j];
            ulEl.appendChild(gameLi);
        }
    }
}

// Handle rewards option selection event
rewards.addEventListener('change', () => handleRewardsOption(rewards));

// submit event listener
form.addEventListener("submit", (e) => {

    validateLength(fullName, 3); // validate name length
    validateRegEx(email, true); // validate email regex

    if ((rewards.value === 'Yes')) {
        validateLength(rewardsNumber, 3); // validate job title field
    }

   // if not valid input, prevent default form submission behavior
   if (!validInput) {
        e.preventDefault();
        console.log('Failed: Bad input, verify all input entries');

    } else {
        myInfoObj.name = fullName.value;
        myInfoObj.email = email.value;
        myInfoObj.rewards = rewardsNumber.value;
        console.log('rewardsNumber.value: ', rewardsNumber.value);

        // save movieAnsObj in local storage
        let myInfoObjToStore = JSON.stringify(myInfoObj);
        localStorage.setItem("My-Info", myInfoObjToStore);

        // All input is valid
        console.log(myInfoObj); 
        e.preventDefault();
        form.style.display = "none"; // hide the contact form
        resultsForm.style.display = "block"; // unhide the results form
        displayMyInfo();
        console.log('Success: All input is valid, form submitted');
   }
});

// checkbox event listener
const editInfoCheckBox = document.getElementById("edit-myinfo");
editInfoCheckBox.addEventListener("click", (e) => {
    if (editInfoCheckBox.checked) {
        resultsForm.style.display = "none"; // hide the results form
        form.style.display = "block"; // unhide the contact form
    }
})

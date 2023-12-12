let questionOne =
{
    ques: "1)	What is your favorite movie genre?",
    options: {
        14: "a. Fantasy",
        18: "b. Drama",
        28: "c. Action",
        35: "d. Comedy",
    }
}

let questionTwo =
{
    ques: "2) How far do you want to go back?",
    options: {
        1970: "a. 1970s",
        1980: "b. 1980s",
        1990: "c. 1990s",
        2000: "c. 2000s",        
    }
}

let questionThree =
{
    ques: "3) Which imaginary world would you rather exist in?",
    options: {
        Fantasy: "a. Game of Thrones world",
        Family: "b. Disney world",
        Science_Fiction: "c. Avatar world",
        Music: "c. Barbie world",        
    }
}

let questionFour =
{
    ques: "4)	What is your favorite gaming platform?",
    options: {
        1: "a. Xbox One",
        4: "b. PC. ",
        7: "c. Nintendo Switch",
        187: "d. PlayStation 5",
    }
}

let questionFive =
{
    ques: "5) Do you like working/playing with others?",
    options: {
        7:  "a.	I like playing against multiple people",
        18: "b.	I like playing in a players community",
        31: "c.	I like playing solo",
    },
}

let questionSix =
{
    ques: "6) How latest game do you like to play?",
    options: {
        2020: "a. 2020",
        2021: "b. 2021",
        2022: "c. 2022",
        2023: "c. 2023",        
    }
}

// movie answers object to store in local storage
let movieAnsObj = {
    genre: "",
    year: "",
    world: "",
}

// movie answers object to store in local storage
let gameAnsObj = {
    platform: "",
    playerType: "",
    year: "",
}

// use setTimeout() to guide user what to do next
const userNoticeEl = document.getElementById('usernotice');
    setTimeout(() => {
        userNoticeEl.style.visibility = "visible";
    }
    , 5000
);

// Hide view results button, until all the questions were answered by the user
const quesResBtnEl = document.getElementById('viewresBtn');
quesResBtnEl.style.visibility = 'hidden';

const divEl = document.getElementById('qnacontainer');

// Add event listener for the findmyfav button
const findMyFavBtnEl = document.getElementById('findmyfav');

findMyFavBtnEl.addEventListener('click', () => { // show question 1
    // Create a new <div> element to display question 1
    const div1 = document.createElement('div');
    div1.id = 'div1';
    divEl.appendChild(div1);

    // Create a new <p> element for question 1
    const q1El = document.createElement('p');
    q1El.id = 'question1';
    q1El.setAttribute("class", "questions");
    q1El.innerText = `${questionOne.ques}`;

    // create an array of the question 1 keys & values
    let question1Keys = Object.keys(questionOne.options);
    let question1Values = Object.values(questionOne.options);

    // append question 1 to the div1 element
    div1.appendChild(q1El);

    // create question1 answer buttons
    for (let i = 0; i < question1Values.length; i++) {
        const ques1Btn = document.createElement('BUTTON');
        ques1Btn.id = 'ques1Btn';
        ques1Btn.setAttribute("class", "answeroptions");
        const ques1BtnText = document.createTextNode(`${question1Values[i]}`);
        ques1Btn.setAttribute("data-value", question1Keys[i]);
        ques1Btn.appendChild(ques1BtnText);
        div1.appendChild(ques1Btn);
    }
});

// Add event listener for the question1 button
    divEl.addEventListener('click', (e) => {
    if (e.target.id === 'ques1Btn') { // save question 1 response & create question 2

        // add user selected movie genre to the movieAnsObj
        movieAnsObj.genre = e.target.attributes[2].value;

        // hide question 1 div
        document.getElementById('div1').style.display = 'none';

        // Create a new <div> element to display question 2
        const div2 = document.createElement('div');
        div2.id = 'div2';
        divEl.appendChild(div2);

        // Create a new <p> element to display question 2
        const q2El = document.createElement('p');
        q2El.id = 'question2';
        q2El.setAttribute("class", "questions");
        q2El.innerText = `${questionTwo.ques}`;

        // create an array of the question2 keys & values
        let question2Keys = Object.keys(questionTwo.options);
        let question2Values = Object.values(questionTwo.options);

        // append question2 to div2
        div2.appendChild(q2El);

        // create question2 answer buttons
        for (let j = 0; j < question2Values.length; j++) {
            const ques2Btn = document.createElement('BUTTON');
            ques2Btn.id = 'ques2Btn';
            ques2Btn.setAttribute("class", "answeroptions");
            const ques2BtnText = document.createTextNode(`${question2Values[j]}`);
            ques2Btn.setAttribute("data-value", question2Keys[j]);
            ques2Btn.appendChild(ques2BtnText);
            div2.appendChild(ques2Btn);
        }

    } else if (e.target.id === 'ques2Btn') { // save question 2 response, and create question 3
        // add user selected movie year to the movieAnsObj
        movieAnsObj.year = e.target.attributes[2].value;

        // hide question 2 div
        document.getElementById('div2').style.display = 'none';

        // Create a new <div> element to display question 3
        const div3 = document.createElement('div');
        div3.id = 'div3';
        divEl.appendChild(div3);

        // Create a new <p> element to display question 3
        const q3El = document.createElement('p');
        q3El.id = 'question3';
        q3El.setAttribute("class", "questions");
        q3El.innerText = `${questionThree.ques}`;

        // create an array of the question3 keys & values
        let question3Keys = Object.keys(questionThree.options);
        let question3Values = Object.values(questionThree.options);

        // append question3 to the document body
        div3.appendChild(q3El);

        // create question3 answer buttons
        for (let k = 0; k < question3Values.length; k++) {
            const ques3Btn = document.createElement('BUTTON');
            ques3Btn.id = 'ques3Btn';
            ques3Btn.setAttribute("class", "answeroptions");
            const ques3BtnText = document.createTextNode(`${question3Values[k]}`);
            ques3Btn.setAttribute("data-value", question3Keys[k]);
            ques3Btn.appendChild(ques3BtnText);
            div3.appendChild(ques3Btn);
        }

    }  else if (e.target.id === 'ques3Btn') { // save question 3 response, and create question 4
        // add user selected movie world to the movieAnsObj
        movieAnsObj.world = e.target.attributes[2].value;
        console.log('movieAnsObj: ', movieAnsObj);

        // hide question 3 div
        document.getElementById('div3').style.display = 'none';

        // Create a new <div> element to display question 4
        const div4 = document.createElement('div');
        div4.id = 'div4';
        divEl.appendChild(div4);

        // save movieAnsObj in local storage
        let movieAnsObjToStore = JSON.stringify(movieAnsObj);
        localStorage.setItem("Stored-Movie-Answers", movieAnsObjToStore);

        // Create a new <p> element to display question 4
        const q4El = document.createElement('p');
        q4El.id = 'question4';
        q4El.setAttribute("class", "questions");
        q4El.innerText = `${questionFour.ques}`;

        // create an array of the question 4 keys & values
        let question4Keys = Object.keys(questionFour.options);
        let question4Values = Object.values(questionFour.options);

        // append question 4 to the document body
        div4.appendChild(q4El);

        // create question 4 answer buttons
        for (let l = 0; l < question4Values.length; l++) {
            const ques4Btn = document.createElement('BUTTON');
            ques4Btn.id = 'ques4Btn';
            ques4Btn.setAttribute("class", "answeroptions");
            const ques4BtnText = document.createTextNode(`${question4Values[l]}`);
            ques4Btn.setAttribute("data-value", question4Keys[l]);
            ques4Btn.appendChild(ques4BtnText);
            div4.appendChild(ques4Btn);
        }

    }  else if (e.target.id === 'ques4Btn') { // save question 4 response, and create question 5
        // add user selected gaming platform to the gameAnsObj
        gameAnsObj.platform = e.target.attributes[2].value;

        // hide question 4 div
        document.getElementById('div4').style.display = 'none';

        // Create a new <div> element to display question 5
        const div5 = document.createElement('div');
        div5.id = 'div5';
        divEl.appendChild(div5);

        // Create a new <p> element to display question 5
        const q5El = document.createElement('p');
        q5El.id = 'question5';
        q5El.setAttribute("class", "questions");
        q5El.innerText = `${questionFive.ques}`;

        // create an array of the question 5 keys & values
        let question5Keys = Object.keys(questionFive.options);
        let question5Values = Object.values(questionFive.options);

        // append question 5 to the document body
        div5.appendChild(q5El);

        // create question 5 answer buttons
        for (let m = 0; m < question5Values.length; m++) {
            const ques5Btn = document.createElement('BUTTON');
            ques5Btn.id = 'ques5Btn';
            ques5Btn.setAttribute("class", "answeroptions");
            const ques5BtnText = document.createTextNode(`${question5Values[m]}`);
            ques5Btn.setAttribute("data-value", question5Keys[m]);
            ques5Btn.appendChild(ques5BtnText);
            div5.appendChild(ques5Btn);
        }

    }  else if (e.target.id === 'ques5Btn') { // save question 5 response, and create question 6
        // add user selected gaming platform to the gameAnsObj
        gameAnsObj.playerType = e.target.attributes[2].value;

        // hide question 5 div
        document.getElementById('div5').style.display = 'none';

        // Create a new <div> element to display question 6
        const div6 = document.createElement('div');
        div6.id = 'div6';
        divEl.appendChild(div6);

        // Create a new <p> element to display question 6
        const q6El = document.createElement('p');
        q6El.id = 'question6';
        q6El.setAttribute("class", "questions");
        q6El.innerText = `${questionSix.ques}`;

        // create an array of the question 6 keys & values
        let question6Keys = Object.keys(questionSix.options);
        let question6Values = Object.values(questionSix.options);

        // append question 6 to the document body
        div6.appendChild(q6El);

        // create question 6 answer buttons
        for (let n = 0; n < question6Values.length; n++) {
            const ques6Btn = document.createElement('BUTTON');
            ques6Btn.id = 'ques6Btn';
            ques6Btn.setAttribute("class", "answeroptions");
            const ques6BtnText = document.createTextNode(`${question6Values[n]}`);
            ques6Btn.setAttribute("data-value", question6Keys[n]);
            ques6Btn.appendChild(ques6BtnText);
            div6.appendChild(ques6Btn);
        }

    }  else if (e.target.id === 'ques6Btn') { // save question 6 response, and save gameAnsObj
        // add user selected gaming platform to the gameAnsObj
        gameAnsObj.year = e.target.attributes[2].value;
        console.log('gameAnsObj: ', gameAnsObj);

        // save gameAnsObj in local storage
        let gameAnsObjToStore = JSON.stringify(gameAnsObj);
        localStorage.setItem("Stored-Game-Answers", gameAnsObjToStore);

        // show view results button, after all the questions were answered by the user
        quesResBtnEl.style.visibility = 'visible';
    }
});

// Add event listener for the question1 button
quesResBtnEl.addEventListener('click', () => {
    // All movie answers collected, switch focus to results.html to show results
    window.location.href = "results.html";
})

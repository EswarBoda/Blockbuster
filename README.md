# Blockbuster

# Project Description
The idea of this project to bring back the nostalgia of the old Blockbuster Video store experience.
As they ener the site, and ready to explore, Users will be asked a series of questions, and based on their responses, they will be matched with a recommended movie and game selection.

# Layout of web pages
There are mainly three pages.
1. A landing page - User will be asked a series of questions here (3 movie related, 3 gaming related)
2. Recommended Results page - After answering last question, user is automatically redirected to the Recommended Results page, where user can save results in their own results page.
3. My Results page - Here user can see the movie, game results they saved, and also can see or edit rewards membership information

# APIs
This project uses two external 3rd party APIs for finding movies and games.
These APIs are called using JavaScript fetch() method.

https://developer.themoviedb.org/docs - For discovering movie matches based on the user answers
https://rawg.io/apidocs - For discovering game matches based on the user answers

# API Keys
Developer that wants to use this project needs to acquire their own API keys from the above developer sites, and then need to create api-key.js file with the below two key values.
Step1: Create api-key.js file, and add it to the project
Step2: Create below two keys in api-key.js file
MDB_API_KEY=""
RAWG_API_KEY=""

# Timing function
In the home page, if user doesn't start movie, game search automatically, after 5 sec, user will see a notice with guidance.
This is achieved using setTimeOut() 

# Event Listeners
There are multiple event listeners added on all 3 pages to respond to different user actions.

# Form Validaion
In the MyResults page, user will provide name, email, blockbuster rewards number options. All these fields are validated on the client side first. User is appropriately warned if any of the input is not valid.
Form is submitted only when all the input is valid.





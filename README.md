## Welcome to Team 109!

#### To run locally:

Make sure to have the following dependencies/tools installed:
  - [VSCode](https://code.visualstudio.com/)
  - [Node.js (LTS)](https://nodejs.org/en)

Make sure to create an ssh key and add your public key to your GitHub account.
  - Create ssh key: [Link](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)
  - Add public ssh key to GitHub: [Link](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account)

Install the required dependencies:
  - `cd` into `./frontend` and run:
  ```bash
  npm install
  ```
  - Then `cd` into `./backend-api` and run:
  ```bash
  npm install
  ```

---

Then create two terminals both in the same project root directory.
  - In one, run:
  ```bash
  npm run app
  ```
  - In the other, run:
  ```bash
  npm run api
  ```

The application should be running at `http://localhost:3000`


#### Summary of Presentation Introduction:
Biology students often have a hard time learning content about human anatomy because the human body is incredibly complex, and the number of structures that require memorization is massive. With our website, MedCards, we want to allow users to easily review material about human anatomy visually. 

MedCards is a educational-based software application that helps allow users to easily review material about human anatomy in a visual manner. Our application has a different functionalities which includes: users can make their own accounts and login to their account, users can tap on different parts of the body to learn more about that body part, users can search to find the body part they would like to learn more about, and once the user is done with the learning page, they can take various quizzes on the topic. 

While there are similar existing softwares that exist such as Quizlet, MedCards has a primary focus on human anatomy while Quizlet is much more broad. Additionally, MedCards utilizes the presentation of various bone structures of the human body to familiarize its users through visual learning.

#### Technical Architecture:
The front end allows the user to interact with the application and displays visually the information stored in the back end. When logging in, the front end sends CRUD requests to the back end. Registering users are posted to the database and users trying to login are compared to the existing users in the database .The role of our database is to store user information and prevent duplicate usernames. Once the user is logged in, the home page sends a GET request to the back end to acquire all the card data and populate the front end. User interaction with the application is also handled in the back end, such as when taking the quiz and going through the carousel component. 

The front end is in javascript and we also utilized the Mui component library. For authentication we used JWT. For the backend we are using React JS because it is lightweight and able to handle logic. 

We all worked on the frontend, but mainly Jacob and Sofia focused on that component of development and Telman worked on the authentication. Jessie and Telmen also worked on the backend and database integration. 


#### Group Members and Their Roles:
We all collectively helped on frontend development, but mainly Jacob and Sofia were focused on that component of the development while Telmen worked on the authentication. Jessie and Telmen also worked on the backend and database integration. 


 




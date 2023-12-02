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

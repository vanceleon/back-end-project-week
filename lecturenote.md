
HOSTING APPLICATION ON HEROKU

- create heroku account
- Install heroku CLI https://devcenter.heroku.com/articles/getting-started-with-nodejs#set-up
- create new application for your API
- Go to Deploy tab and connect you application to Github
    - pick the branch you want deployed
    - click the Enable Automatic Deploys Black button
    - Click the deploy Branch button 
- Click the `Open App` Button at the top right to open your api
- Change you "start" script in `package.json` to use _node_ instead of _nodemon_
- push the changes to Github and wait for changes to be deployed
- refresh application
- Profit!/


To make the port dynamic 
- install 'dontenv' npm module
- add `require('dotenv').config();` as the first live where your `server.listen()` is.
- make the port dynamic `server.listen(process.env.PORT)`
- have an endpoint to use for testing that does not try to use the database
- push those changes to GitHub and see if they deploy without errors. 
- add a `.env` file to the root of your project and add the `PORT=3333` line inside
- add `.env` to you `.gitignore` file and push the changes to Github


Make DB connection dynamic

- open `knexfile.js` and add `require('dotenv').config();` at the top
- add `const dbConnection = process.env.DATABASE_URL` after require `dotenv`
- push changes to GitHub
- in heroku.com, go to `Resources` tab and add the `Heroku Postgres` addon.

Run Migrations on the Production Database
- in the command line run `heroku run knex migrate:latest -a yourappname`  ex) `QThread` is Luis current one in the video
- in the command line run `heroku run knex seed:run -a yourappname`
- add `DB=development` to the local `.env` file
- change your knex config file to use: 

```js
const dbEngine = process.env.DB || 'development';
const config = require('../knexfile.js')[dbEngine];
```

- go to the `Settings` tab on heroku.com and click the `Reveal Config Vars` button 
- add `DB` with the value `production` to the app 
- push changes to GitHub


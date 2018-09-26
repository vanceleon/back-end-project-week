
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
- make the port dynamicL `server.listen(process.env.PORT)`
- have an endpoint to use for testing that does not try to use the database
- push those changes to GitHub and see if they deploy without errors. 
- add a `.env` file to the root of your project and add the `PORT=3333` line inside
- add `.env` to you `.gitignore` file and push the changes to Github
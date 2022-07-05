# Find-help

Live Link: https://find-help.herokuapp.com/

Find-help is an application loosely based on Yelp where users can find the help they need and can share the resources they have to help others.

## This application uses:
[Javascript](https://developer.mozilla.org/en-US/docs/Web/javascript)
[HTML5](https://developer.mozilla.org/en-US/docs/Glossary/HTML5)
[CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS)
[Sequelize](https://sequelize.org/docs/v6/)
[React](https://reactjs.org/docs/getting-started.html)
[Redux](https://redux.js.org/)
[Express](http://expressjs.com/)
[Heroku](https://www.heroku.com/home)

## [Feature list](https://github.com/wesleyblackburn90/Find-help/wiki/Feature-List)

## [Database schema](https://github.com/wesleyblackburn90/Find-help/wiki/Database-schema)

## [Store](https://github.com/wesleyblackburn90/Find-help/wiki/Store)

## How to use this application

- Clone this repo into your own folder
- Navigate into both the front end folder and the back end folder and 'npm install' to download all dependencies
- Create a '.env' file in your backend directory so the app will be able to access your database. Use the existing '.env' file as a reference when making your own to match your data
- Run 'npx dotenv sequelize db:migrate' then run  'npx dotenv sequelize db:seed:all' to set up your database
- In two seperate terminals, one in your backend server and one in your front end server, run 'npm start' in both terminals. If the front end server doesn't open the site automatically, go to 'localhost:3000'

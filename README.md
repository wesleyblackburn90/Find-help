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

## How to use this application

- Clone this repo into your own folder
- Navigate into both the front end folder and the back end folder and 'npm install' to download all dependencies
- Create a '.env' file in your backend directory so the app will be able to access your database. Use the existing '.env' file as a reference when making your own to match your data
- Run 'npx dotenv sequelize db:migrate' then run  'npx dotenv sequelize db:seed:all' to set up your database
- In two seperate terminals, one in your backend server and one in your front end server, run 'npm start' in both terminals. If the front end server doesn't open the site automatically, go to 'localhost:3000'

# Demonstration

## Home screen

From here, you can either proceed as a demo user or make your own account to add your own businesses
![home screen](https://user-images.githubusercontent.com/98054974/177251286-6e11dd79-4a35-4f56-a002-51dff48dbf70.PNG)

Once logged in, you have access to all businesses! Navigate to a business that interests you or make your own
![business screen](https://user-images.githubusercontent.com/98054974/177251305-5034777d-773e-471d-b73f-6449d3934e4f.PNG)

On the page of the business, feel free to leave a review. If the business is yours, you can update and even delete your business page.
![individual business](https://user-images.githubusercontent.com/98054974/177251340-a28ec46c-489d-4f42-8fb5-55990693d021.PNG)

# Future features

- Adding more functionality, location, etc
- Making the CSS more smooth

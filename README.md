# `Gem Finder`
Are you curious about building a ring, either for engagement, a gift, or otherwise? Gem Finder is a great place to start! It allows you to browse numerous gems by gem type, where you can even explore what different cuts of this gem would look like. You can save gems you like to your "favorites," and from there you can edit the gem name, add notes about the gem, and so on. Ultimately, this app allows you to explore many gems with ease as you begin the process of deciding what type of ring you would like. 

Heroku link: link

## Libraries, Languages, and Frameworks Used:
-JAVASCRIPT
-NODE.JS
-EXPRESS.JS
-BOOTSTRAP
-POSTGRESQL
-CSS
-HTML5


### Installation Instructions:
Please note: it requires Node.js, Postgres, and Sequelize
1. Fork + Clone this repo to your terminal
2. Run npm install
3. Run sequelize db:migrate:all, then sequelize db:seed:all to set up the database
4. Run npm start to start the server
5. Open http://localhost:4000 in a web browser to access app.


## `1` Wireframe


## `2` Navigating the Website
-You will first come up on the authorization login page, where you will be asked to either sign up or login 
-if you sign up, you will be redirected to the login page to then log in 
-you will then be brought to the home page, which will encourage you to browse through different gems by type
-you can click on any of these gem cards, and you will be redirected to a route that has all the cuts for that gem type
-if you see a gem you like, you can click, "add to favorites"
-in the nav bar, you will see there is a favorites section. If you click on it, it will bring you to your favorites, where you will see any/all gems you have added to your favorites. 
-while in your favorites, you can edit the gem's name, add a comment to that gem, edit or delete the comment, or delete the gem from your favorites entirely.
-there is also a profile section in your navbar. If you click on that, it will bring you to your profile. From there, you can edit your profile by adding "about me" or "website" fields, and you can also delete these fields at will.

## `3` Blockers
-figuring out favorites model
-figuring out how to add comments to favorites for user and ensuring it wouldn't impact other gems user doesn't have authorization to use
-making sure the favorites section had all gems, regardless of type

## `4` Reach goals
-creating a search boxs that would allow for user to serach by gem type of gem cut
-eventually add more datatables, such as carat size for gem, ring settings, ring band types, etc
-create the logic for a user to be able to see what their gem would look like on a ring material of their choice
-create the logical for user accounts to be abel to friend one another and share favorited gems
-create the logic that would search the internet for rings/pricing based on created rings user has under favorites
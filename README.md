# MEAN stack MVC
This is a project done with instructions from a [tutorial](https://hackhands.com/how-to-get-started-on-the-mean-stack/). 

The project demonstrates the use of MEAN stack (MongoDB as the database, Express as the web framework, AngularJS as the frontend framework, 
and Node.js as the server)

The structure is MVC (Model-View-Controller)

- Controller: 
 - `index.server.controller.js` creates the title and appends the username to the title
 - `user.server.controller.js` implements some user operations on the server side such as `create`, `list`, `userByID`, `update`, `delete`, `register`, etc.

- Model:
 - `user.server.model.js` hosts the implementation of the class UserSchema. An object of the class holds several fields unique to each user (`name`, `email`, `username`, `password`).
 The class also has some operations on user on server side.
 
- View
 - `index.ejs` serves the index page and is written in ejs (embedded javascript template)
 - `login.ejs` is the login form
 - `register.ejs` is the register form
 
 The `/config` folder contains several configuration files for each components in the stack and additional modules.
 
 
 

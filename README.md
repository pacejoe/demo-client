# Demo Client App

# Index
> Initializes application and includes js dependencies

* index.html

# Views  (app/views)   
> The partial views within the application

# Header and Footer
* app/views/partials/header.html  
* app/views/partials/footer.html  

# Other views
* app/views/home.html  
* app/views/page1.html  
* app/views/page2.html  
* app/views/page3.html  

# Styles 
> The css styles for the application

* styes/style.css


# Routes
> Controls the flow of the application using ngRoute  

* app/routes.js  

# Controllers
> Attached to a view (or DOM element) to set it's initial state and control its behavior

* app/controllers/home.controller.js
* app/controllers/page1.controller.js
* app/controllers/page2.controller.js
* app/controllers/page3.controller.js


# Filters
> Filters are used to process data right before it is added to the view

* app/filters/ri_only.filter.js

# Services
> Services are used to share code across your app (for example: interaction with a web service)

* app/services/user.service.js

# Environment
> Manages local application server and deploys code changes

* Gruntfile.js
* package.json


# Setup

1. npm install
2. grunt serve
3. visit localhost:9000 in browser

# Sample rest service
> refer to README in rest folder for documentation

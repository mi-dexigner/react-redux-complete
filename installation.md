# React Redux Complete

## React Setup
- vs code extension color theme `Monokai++`
- vs code extension react `ES7 React/Redux/GraphQL/React-Native snippets`
- vs code extension react `Sublime Babel`
- vs code - goto setting - keyboard shortcode click find `terminal toggle` and changed the shortcode
- `https://tachyons.io/`

## Create React App
- A command line tool to create React apps
  - Development server
  - Use ES6 features which are not normally supported
  - Keep our code modular
  - Use build tools to create optimmized code

- https://github.com/facebook/create-react-app
- npm install -g create-react-app 
- npx create-react-app .  (dot means in root folder install with dependance)

## Single Page Apps
- React apps are typically SPA's
- Only ever one HTML page served to the browser
- React then controls what a users sees on that pages

## Nesting Components
 - App.js Root Component
  - Navbar.js
  - ContactForm.js

 ## Container vs UI Componenets

 #### Container Components
 - Contain state
 - Contain lifecycle
 - Not concerned with UI
 - Use classes to create
 

 #### UI Components
 - Don't contain state
 - Receive data from props
 - Only concerned with UI
 - Use functions to create

## React life cycle
- http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

## React Router
- npm install react-router-dom
- 
## Programmatic Redirects
``sh
setTimeout(()=>{
        props.history.push('/about');
    },2000)
```

## Resource LINK
- https://materializecss.com/
- 
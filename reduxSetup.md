- npx create-react-app
- npm install react-router-dom
- npm install redux react-redux
- open index.js below code configure

```sh
  import {createStore} from 'redux'

const store = createStore();

```

- create a `store` folder inside the `src` folder
- create a `reducers` folder inside the `store` folder


- https://redux.js.org/introduction/getting-started

- https://react-redux.js.org/introduction/quick-start


### Adding Dummy Data

- create `projectReducer.js` inside a `reducer` folder

```sh
const initState = {
  projects: [
    {id: '1', title: 'help me find peach', content: 'blah blah blah'},
    {id: '2', title: 'collect all the stars', content: 'blah blah blah'},
    {id: '3', title: 'egg hunt with yoshi', content: 'blah blah blah'}
  ]
};

const projectReducer = (state = initState, action) => {
  return state;
};

export default projectReducer;

```


### Using Thunk
- npm install redux-thunk

- add `index.js`
```sh
import thunk from 'redux-thunk'

```


### Createting a firebase Setup
- npm install firebase
- Firestore is a NoSQL database

### Connecting Redux to Firebase
- npm install react-redux-firebase redux-firestore
- npm i --save react-redux-firebase@next
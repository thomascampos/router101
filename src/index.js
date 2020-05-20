import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// Provider appartient au package react-redux
// Provider, issu du package react-redux, fait le lien entre react et redux
// Donc le lien entre le data store de Redux et React
// il faut par conséquent fournir à ce composant Provider
// le data store de Redux
// Provider enveloppe l'application React
// et pour peu qu'on lui fournisse en argument, en "propriété" le data store de Redux (propriété nommée store) 
// ce Provider rend accessible, connecte ce data store de Redux 
// à tous les composants React qui ont été wrappés par la fonction connect 
import { Provider } from 'react-redux';
// cette fonction, issu du package redux,
// crée le data store de Redux portant l'arbre état
// en prenant en paramètre d'entrée 
// UNE SEULE fonction reducer (le reducer est une fonction)
// [UNE SEULE d'où l'utilité du combineReducers dans rootReducers]
// qui renvoie le nouvel arbre d'état (le nouveau data store)
// à partir de l'arbre d'état actuel (l'actuel data store) et d'une action à réaliser sur cet arbre d'état
import { createStore } from 'redux';
// reducer = une fonction qui prend en entrée l'actuel data store et une action à réaliser sur ce data store
// et renvoie le nouveau data store
import rootReducer from './reducers/rootReducer';

// le store Redux ou state tree qui est en fait un objet JavaScript simple
const theStore = createStore(rootReducer);
console.log("index.js > theStore.frozen = " + theStore.frozen);


ReactDOM.render(
    <Provider store={theStore}>
      <App />
    </Provider>,
  document.getElementById('root')
);

console.log("index.js > theStore.frozen = " + theStore.frozen);


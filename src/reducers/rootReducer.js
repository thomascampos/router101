// la function combineReducers, issu du package redux
// prend en paramètre
// 1 ou plusieurs reducers, chacun spécifique de la mise à jour d'une partie du data store
// pour n'en retourner qu'1 seul, 1 seul reducer
// la function combineReducers, issu du package redux
// transforme un objet dont les valeurs sont les différentes fonctions reducers (paramètre en entrée)
// en 1 seule et unique fonction reducer
// Cette seule et unique fonction reducer retournée va appeler chaque reducer fils
// et réunit les résultats en 1 seul objet état,
// dont les clés correspondent aux clés des fonctions reducers passées en entrée
// et pour chacun des reducers fils en entrée
// donne la propriété correspondante du state global redux cad la propriété du store redux
// qui est alimentée spécifiquement par ce reducer
// donc prend en entrée
// chaque propriété du store redux qui est un objet Javascript simple à gauche
// accompagnée à droite du reducer qui alimente cette propriété du store redux
import {combineReducers} from 'redux';

// IMPORTER TOUTES LES FONCTIONS REDUCER QUI VONT ETRE COMBINEES EN UN SEUL REDUCER
import monPetitReducerRienQuaMOI from './frozenReducer';
import monProduceReducer from './produceReducer';
import monMeatReducer from './meatReducer';

// là, je donne 
// la structure de l'objet JavaScript global (le state tree ou redux store)
// le nom de chaque propriété de cet objet avec la function reducer qui alimente la propriété
// propriété frozen alimentée par la fonction JS reducer monPetitReducerRienQuaMOI
// propriété produce alimentée par la fonction JS reducer monProduceReducer
// propriété theMeatToEatR alimentée par la fonction JS reducer monMeatReducer
const rootreducer = combineReducers({
    frozen: monPetitReducerRienQuaMOI,
    produce: monProduceReducer,
    theMeatToEatR: monMeatReducer
});

export default rootreducer;
import React, {Component} from 'react';
import { connect } from 'react-redux';
import frozenActionCreator from '../actions/frozenInvUpdate';
import { bindActionCreators } from 'redux';

class FrozenDept extends Component {

    updateTheFrozenElement(operation, index) {
        console.log("FrozenDept > updateTheFrozenElement")
        this.props.updateFrozenActionComponentProp(operation, index);
    }

    render() {
        console.log("class FrozenDept > render : this.props.frozenData = " + this.props.frozenData);
        const feedData = this.props.frozenData.map((item, index) => {
            return (
                <div>
                    <li key={item}>{item.food}: {item.quantity}</li>
                    <input type="button" onClick={() => {this.updateTheFrozenElement("+", index)}} value="+"></input>
                    <input type="button" onClick={() => {this.updateTheFrozenElement("-", index)}} value="-"></input>
                </div>
            ) 
        });
        return (
            <div>
                <h1>The Frozen Food Department</h1>
                <ul>
                    {feedData}
                </ul>
            </div>
        )
    }
}

// s'exécute dès lors que le store Redux est mis à jour
// mappe la propriété frozen du store Redux
// à la propriété frozenData du composant React de type FrozenDept
const mapStateToProps = (reduxStore) => {
    console.log("FICHIER FrozenDept > fonction mapStateToProps");
    return {
        frozenData: reduxStore.frozen
    }
}

// avec mapDispatchToProps
// 1) nous créons une propriété égale à une fonction JS créateur d'une action
// 2) nous lions cette propriété cad cette fonction créateur d'actions au dispatcheur Redux
//    ce qui fait que l'action produite par la fonction est fournie directement au Dispatcher Redux
//    et par conséquent indirectement à tous les reducers qui sont aussi des fonctions JS 
const mapDispatchToProps = (dispatch) => {
    console.log("Map la fonction JS de création d'action en une propriété du composant React");
    return (
        bindActionCreators({
            updateFrozenActionComponentProp: frozenActionCreator
        }, dispatch)
    )
}

// export default FrozenDept;
// function connect 
// connecte en fait le composant FrozenDept au store Redux (commentaire de l'interface de cette méthode)
// et concrètement cette connexion ici va se faire dans la fonction mapStateToProps du composant React
// ici avec 2 paramètres dont le 1er paramètre paramètre pour cette fonction
// qui mappe le store Redux (le state tree) aux propriétés du composant React (qu'on connecte)
// ici mappe la propriété frozen du store Redux à la propriété frozenData du composant React 
export default connect(mapStateToProps, mapDispatchToProps)(FrozenDept);
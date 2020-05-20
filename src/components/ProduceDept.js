import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import produceElementUpdateActionCreator from '../actions/produceInvUpdate';

class ProduceDept extends Component {

    updateQuantityElement(operation, index) {
        console.log("ProduceDept > updateQuantityElement");
        console.log("Avec operation = " + operation);
        console.log("Et index = " + index);
        this.props.updateAMeatElementQuantityProp(operation, index);
    }

    render() {
        console.log("ProduceDept > render");
        const produceElements = this.props.produceElementsProp.map((item, index) => {
            return (
                <div>
                    <li key={item}>{item.food}: {item.quantity}</li>
                    <input type="button" onClick={() => {this.updateQuantityElement("+", index)}} value="+"/>
                    <input type="button" onClick={() => {this.updateQuantityElement("-", index)}} value="-"/>
                </div>
            )
        });
        return (
            <div>
                <h1>The Produce Elements</h1>
                <ul>
                    {produceElements}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (reduxStore) => {
    console.log("FICHIER ProduceDept > mapStateToProps");
    return {
        produceElementsProp : reduxStore.produce
    }
}

const mapDispatchToProps = (dispatch) => {
    console.log("FICHIER ProduceDept > mapStateToProps");
    return (
        bindActionCreators({
            updateAMeatElementQuantityProp : produceElementUpdateActionCreator
        }, dispatch)
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(ProduceDept);
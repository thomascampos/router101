import React, {Component} from 'react';
import {connect} from 'react-redux';
import meatUpdateActionCreator from '../actions/meatInvUpdate';
import { bindActionCreators } from 'redux';

class MeatDept extends Component {

    updateQuantityMeatElement(operation, index) {
        console.log("MeatDept > updateQuantityElement");
        this.props.updateAMeatElementActionCreatorProp(operation, index);
    }

    render() {
        console.log("class MeatDept > render : this.props.meatData = " + this.props.meatData);
        const meatFood = this.props.meatData.map((item, index) => {
           return (
                <div>
                    <li key={item}>{item.food}: {item.quantity}</li>
                    <input type="button" onClick={() => {this.updateQuantityMeatElement("+", index)}} value="+"/>
                    <input type="button" onClick={() => {this.updateQuantityMeatElement("-", index)}} value="-"/>
                </div>
           )
        });
        return (
            <div>
                <h1>Meat Department Food</h1>
                <ul>
                    {meatFood}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (storeRedux) => {
    console.log("FICHIER MeatDept > fonction mapStateToProps");
    return {
        meatData: storeRedux.theMeatToEatR
    }
}

const mapDispatchToProps = (dispatch) => {
    return (
        bindActionCreators({
            updateAMeatElementActionCreatorProp: meatUpdateActionCreator
        }, dispatch)
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(MeatDept);
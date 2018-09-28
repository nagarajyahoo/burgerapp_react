import React, {Component} from 'react';
import Burger from '../../components/builder/burger/Burger'
import IngredientsBuilder from '../../components/builder/IngredientsBuilder'
import Modal from '../../ui/modal/Modal'
import OrderSummary from '../../components/builder/order/ordersummary/OrderSummary'
import axios from '../../interceptors/axios/Axios'
import Spinner from '../../ui/spinner/Spinner'
import withErrorHandler from '../../hoc/error/WithErrorHandler'
import * as IngredientActions from '../../model/store/actions/IngredientActions'
import {connect} from 'react-redux'


class BurgerBuilderComponent extends Component {
    state = {
        purchasing: false,
        processing: false
    };

    isPurchasable = () => {
        const currIngredients = this.props.ingredients;
        if(currIngredients) {
            const sum = Object.keys(currIngredients)
                .map(inKey => {
                    return currIngredients[inKey]
                })
                .reduce((eleSum, ele) => {
                    eleSum += ele;
                    return eleSum;
                }, 0);

            return sum > 0;
        }
        else {
            return false;
        }
    };

    addIngredient = (type) => {
        this.props.addIngredient(type);
    };

    removeIngredient = (type) => {
        this.props.removeIngredient(type);
    };

    updatePurchasing = () => {
        this.setState({purchasing: true});
    };

    cancelPurchase = () => {
        this.setState({purchasing: false});
    };

    continuePurchase = () => {
        this.setState({processing: true});

        this.props.history.push({
            pathname: '/checkout'
        });
    };

    componentDidMount() {
        this.props.resetIngredients();
    }

    render() {
        const modalContent = this.state.processing ?
            <Spinner/> :
            <OrderSummary
                ingredients={this.props.ingredients}
                purchasing={this.state.purchasing}
                cancelPurchase={this.cancelPurchase}
                continuePurchase={this.continuePurchase}/>;

        return (
            <div>
                <Burger ingredients={this.props.ingredients}/>
                <Modal
                    clicked={this.cancelPurchase}
                    show={this.state.purchasing}>
                    {modalContent}
                </Modal>

                <IngredientsBuilder
                    totalPrice={this.props.totalPrice}
                    ingredients={this.props.ingredients}
                    addIngredient={this.addIngredient}
                    removeIngredient={this.removeIngredient}
                    purchasable={this.isPurchasable()}
                    purchasing={this.updatePurchasing}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ingredients: state.burger.ingredients,
        totalPrice: state.burger.totalPrice,
        error: state.burger.error
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addIngredient: (ingredient) => dispatch(IngredientActions.addIngredient(ingredient)),
        removeIngredient: (ingredient) => dispatch(IngredientActions.delIngredient(ingredient)),
        resetIngredients: () => dispatch(IngredientActions.resetIngredients())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilderComponent, axios));
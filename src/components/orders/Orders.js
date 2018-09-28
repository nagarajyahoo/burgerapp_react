import React, {Component} from 'react';
import Order from './order/Order'
import Spinner from '../../ui/spinner/Spinner'
import Aux from '../../hoc/Aux'
import classes from './Orders.css'
import * as OrderActions from '../../model/store/actions/OrderActions'
import {connect} from 'react-redux'

class Orders extends Component {

    componentDidMount() {
        this.props.fetchOrders();
    }

    render() {
        const content = this.props.processing ?
            <div className={classes.Loading}><Spinner/></div> :
            <div>
                {this.props.orders.map(order => (
                    <Order
                        key={order.id}
                        ingredients={order.ingredients}
                        price={order.price}/>
                ))}
            </div>;

        return (<Aux>{content}</Aux>);
    }
}

const mapStateToProps = (state) => {
    return {
        orders: state.orders.orders,
        error: state.orders.error,
        processing: state.orders.processing,
    }
};

const mapDispatchToProps = (dispatch) => {
  return {
      fetchOrders : () => dispatch(OrderActions.fetchAllOrders())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Orders);
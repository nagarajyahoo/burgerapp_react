import React, {Component} from 'react';
import axios from '../../interceptors/axios/Axios'
import Order from './order/Order'
import Spinner from '../../ui/spinner/Spinner'
import Aux from '../../hoc/Aux'
import classes from './Orders.css'

class Orders extends Component {
    state = {
        orders: [],
        loading: true
    }

    componentDidMount() {
        this.setState({loading: true});

        axios.get('/orders.json')
            .then(res => {
                const fetchedOrders = [];
                for (let key in res.data) {
                    fetchedOrders.push({
                        ...res.data[key],
                        id: key
                    });
                }
                this.setState({loading: false, orders: fetchedOrders});
            })
            .catch(err => {
                this.setState({loading: false});
            });
    }

    render() {
        const content = this.state.loading ?
            <div className={classes.Loading}><Spinner/></div> :
            <div>
                {this.state.orders.map(order => (
                    <Order
                        key={order.id}
                        ingredients={order.ingredients}
                        price={order.price}/>
                ))}
            </div>;

        return (<Aux>{content}</Aux>);
    }
}

export default Orders;
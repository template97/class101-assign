import React, {Component} from 'react';

class Item extends Component {
    render () {
        return (
            <div> hello item {this.props.data}</div>
        )
    }
}

export default Item;
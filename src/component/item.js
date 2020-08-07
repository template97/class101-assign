import React, {Component} from 'react';
import '../products.css'


class Item extends Component {
    

    render () {
        return (
            <div>
                <img className="itemImage" alt={this.props.data.id} src={this.props.data.coverImage}/>
                <div className="itemDescription">
                    <div>{this.props.data.title}</div>
                    <div>가격 {this.props.data.price} </div>
                    <div>점수 {this.props.data.score} </div>
                </div>
            </div>
        )
    }
}

export default Item;
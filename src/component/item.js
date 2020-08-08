import React, {Component} from 'react';
import '../products.css'


class Item extends Component {
    constructor(props){
        super(props);

    }



    render () {
        let itemForProducts = (
            <div>
                <img className="itemImage" alt={this.props.data.id} src={this.props.data.coverImage}/>
                <div className="itemDescription">
                    <div>{this.props.data.title}</div>
                    <div>가격 {this.props.data.price} </div>
                    <div>점수 {this.props.data.score} </div>
                </div>
            </div>
        )

        let itemForCart = (
            <div className="itemDisplay">
                
                <img className="itemImage" alt={this.props.data.id} src={this.props.data.coverImage}/>
                <div className="itemDescription">
                    <div>{this.props.data.title}</div>
                    <div>가격 {this.props.data.price} </div>
                    <div>점수 {this.props.data.score} </div>
                    <div>쿠폰 사용 
                        { this.props.data.hasOwnProperty('availableCoupon') 
                            && !this.props.data.availableCoupon ? ' 불가' : ' 가능'} </div>
                </div>
            </div>
        )
        return (
            <div>
                {this.props.type === 1 ? itemForProducts : itemForCart}
            </div>
        )
    }
}

export default Item;
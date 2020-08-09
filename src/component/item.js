import React, {Component} from 'react';
import '../products.css'


class Item extends Component {
    constructor(props){
        super(props);

    }

    render () {
        let itemForProducts = (
            <div className="itemForProducts">
                
                <div className="itemImagePlaceholder">
                    <img id="itemProductImage" alt={this.props.data.id} src={this.props.data.coverImage}/>
                </div>
                
                <div id="productItemTitle">{this.props.data.title}</div>    
                <div id="productItemPrice">{this.props.data.price}원</div>
                <div id="productItemScore">🧡{this.props.data.score} </div>
                
            </div>
        )

        let itemForCart = (
            <div className="itemForCart">
                <div className="itemImagePlaceholder">
                    <img id="itemCartImage" alt={this.props.data.id} src={this.props.data.coverImage}/>
                </div>
                <div className="cartPlaceholder">
                    <div style={{padding:"10px", width:"540px"}}>
                        <div id="cartItemTitle">{this.props.data.title}</div>
                        <div id="cartItemScore" >🧡{this.props.data.score} </div>
                    </div>
                    <div id="cartItemPrice">가격 {this.props.data.price} </div>
                    <div id="cartItemCoupon">쿠폰 사용 
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
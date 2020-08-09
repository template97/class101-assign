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
                    <img className="itemImage" alt={this.props.data.id} src={this.props.data.coverImage}/>
                </div>
                
                <div className="itemTitle">{this.props.data.title}</div>    
                <div>가격 {this.props.data.price} </div>
                <div>점수 {this.props.data.score} </div>
                
            </div>
        )

        let itemForCart = (
            <div className="itemDisplay">
                <div className="itemImagePlaceholder">
                    <img className="itemImage" alt={this.props.data.id} src={this.props.data.coverImage}/>
                </div>
                <div className="cartPlaceholder">
                    <div style={{padding:"10px", width:"540px"}}>
                        <div className="itemTitle">{this.props.data.title}</div>
                        <div >🧡{this.props.data.score} </div>
                    </div>
                    <div style={{padding:"10px", width:"160px"}}>가격 {this.props.data.price} </div>
                    <div style={{padding:"10px", width:"160px"}}>쿠폰 사용 
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
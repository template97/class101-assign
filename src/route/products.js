import React, {Component} from 'react';
import Button from '@material-ui/core/button'
import Pagination from "material-ui-flat-pagination";

import {Item} from '../component'

class Products extends Component {
    constructor(props) {
        super(props);
        this.state = { offset: 0 };
      }
     
    handleClick = (o) => {
        this.setState({ 
            offset: o
        });
    }
    
    render() {
        let productData = [1,2,3,4,5,6,7,8,9,10,11,12];
        let selectedData = productData.slice(this.state.offset,this.state.offset+5);

        let items = (
            <div>
                {selectedData.map(data => (
                    <Item data={data}/>
                ))}
            </div>
        )
        return (
            <div>
                {items}
                <Pagination
                    limit={5}
                    offset={this.state.offset}
                    total={productData.length}
                    onClick={(e, offset) => this.handleClick(offset)}
                />
            </div>
        );
    }
}

export default Products;
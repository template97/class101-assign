import React, {Component} from 'react';
import Button from '@material-ui/core/button'
import Pagination from "material-ui-flat-pagination";

import {Item} from '../component'

class Products extends Component {
    constructor(props) {
        super(props);
        this.state = { offset: 0 };
      }
     
    handleClick(offset) {
        this.setState({ offset });
    }
    
    render() {
        let data = [1,2,3,4,5,6,7,8,9,10,11,12];
        let selectedData = data.slice(this.state.offset*5,this.state.offset*5+5);
        let items = (
            <div>
                <Item number={this.state.offset * 5}/>
                <Item number={this.state.offset * 5 + 1}/>
                <Item number={this.state.offset * 5 + 2}/>
                <Item number={this.state.offset * 5 + 3}/>
                <Item number={this.state.offset * 5 + 4}/>
            </div>
        )
        return (
            <div>
                {items}
                <Pagination
                    limit={10}
                    offset={this.state.offset}
                    total={100}
                    onClick={(e, offset) => this.handleClick(offset)}
                />
            </div>
        );
    }
}

export default Products;
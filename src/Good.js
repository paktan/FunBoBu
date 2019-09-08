import React, {Component} from  'react';
import './Good.css';
import PropTypes from 'prop-types';
import { Card } from 'antd';

const { Meta } = Card;


class Good extends Component {
    static propTypes = {
        code: PropTypes.string,
        image: PropTypes.string,
        brand: PropTypes.string,
        goodCode: PropTypes.string,
        uniqueness: PropTypes.string,
        size: PropTypes.string,
        totalCount: PropTypes.number,
        cost: PropTypes.number,
        lowCost: PropTypes.number,
        tcgCost: PropTypes.number,
        key: PropTypes.number.isRequired
    }

    state = {
        code:"",
        image:"",
        brand:"",
        goodCode: "",
        uniqueness: "",
        size: "",
        totalCount: 0,
        cost: 0,
        lowCost: 0,
        tcgCost: 0,
        key: 0
    }

    constructor(props) {
        super(props);
        this.state={
            code: props.code,
            image: props.image,
            brand: props.brand,
            goodCode: props.goodCode,
            uniqueness: props.uniqueness,
            size: props.size,
            totalCount: props.totalCount,
            cost: props.cost,
            lowCost: props.lowCost,
            tcgCost: props.tcgCost,
            key: props.key
        }
      }

    render() {
        return (
            <div>
                <Card size="small" title={this.state.code} extra={<a href="#">More</a>} style={{ width: 240 }}>
                    <p>{this.state.brand}</p>
                    <p>{this.state.goodCode}</p>
                    <p>{this.state.uniqueness}</p>
                    <p>{this.state.size}</p>
                    <p>{this.state.totalCount}</p>
                    <p>{this.state.cost}</p>
                    <p>{this.state.lowCost}</p>
                    <p>{this.state.tcgCost}</p>
                </Card>
            </div>
        );
    }   
}


export default Good
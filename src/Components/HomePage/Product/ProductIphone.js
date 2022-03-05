import React, { Component } from 'react'

class ProductIphone extends Component {
    render() {
        return (
            <div>

                <ul>
                    <li><a href={this.props.linkUrl}>{this.props.linkName}</a></li>
                    </ul>
            </div>
        );
    }
}
export default ProductIphone
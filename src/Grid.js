import './Grid.css';
import React, {Component} from 'react';
import Column from './Column';

class Grid extends Component {
    render() {
        const className = this.props.fluid ? 'grid fluid ' : 'grid';
        console.log(parseInt(this.props.maxWidth, 10) === 0);
        const styleGrid = {
            maxWidth: parseInt(this.props.maxWidth, 10) === 0 ? null : parseInt(this.props.maxWidth, 10)
        };

        const columns = [];

        for (let i = 0; i < this.props.columnNumber; i++) {
            columns.push(
                <Column
                    key={i}
                    columnWidth={this.props.columnWidth}
                    columnColor={this.props.columnColor}
                    gutterWidth={this.props.gutterWidth}
                    gutterColor={this.props.gutterColor}
                    opacity={this.props.opacity}
                    fluid={this.props.fluid}
                >
                    {i + 1}
                </Column>)
        }

        return (
            <div className={className} style={styleGrid}>
                {columns}
            </div>
        )
    }

}

export default Grid;

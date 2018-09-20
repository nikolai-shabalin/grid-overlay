import React, {Component} from 'react';
import Column from './Column';

class Grid extends Component {
    render() {

        const style = {
            maxWidth: parseInt(this.props.maxWidth, 10) === 0 ? null : parseInt(this.props.maxWidth, 10),
            display: 'flex',
            flexFlow: 'row nowrap',
            position: 'fixed',
            zIndex: 9999,
            left: '50%',
            transform: 'translateX(-50%)',
            height: '100vh',
            top: 0,
            width: this.props.fluid ? '100%' : null,
            pointerEvents: 'none'
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
            <div style={style}>
                {columns}
            </div>
        )
    }

}

export default Grid;

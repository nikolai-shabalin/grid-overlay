import './Grid.css';
import React, {Component} from 'react';

function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}` : null;
}

class Grid extends Component {
    createColumns(number) {
        const columns = [];
        const styleColumn = {
            width: this.props.fluid ? null: parseInt(this.props.columnWidth, 10),
            backgroundColor: `rgba(${hexToRgb(this.props.columnColor)}, ${this.props.opacity})`,
        };

        const styleGutter = {
            width: parseInt(this.props.gutterWidth, 10) / 2,
            backgroundColor: `rgba(${hexToRgb(this.props.gutterColor)}, ${this.props.opacity})`,
        };

        for (let i = 0; i < number; i++) {
            if (this.props.gutterWidth === '0') {
                columns.push(<div className="column shadow" style={styleColumn}>{i + 1}</div>)
            } else {
                columns.push(<div className="gutter" style={styleGutter} />);
                columns.push(<div className="column" style={styleColumn}>{i + 1}</div>);
                columns.push(<div className="gutter" style={styleGutter} />)
            }
        }

        return columns;
    }

    render() {
        const className = this.props.fluid ? 'grid fluid ' : 'grid';
        const styleGrid = {
            maxWidth: this.props.maxWidth ? parseInt(this.props.maxWidth, 10) : null
        };

        return (
            <div className={className} style={styleGrid}>
                {this.createColumns(this.props.columnNumber)}
            </div>
        )
    }

}

export default Grid;

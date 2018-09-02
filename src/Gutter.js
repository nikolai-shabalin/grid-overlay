import React, {Component} from 'react';
import './Gutter.css';

class Gutter extends Component {
    render() {
        const {width, backgroundColor} = this.props;

        const style = {width, backgroundColor};

        return (
            <div className="gutter" style={style}/>
        )
    }

}

export default Gutter;

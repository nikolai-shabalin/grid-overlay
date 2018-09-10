import React, {Component} from 'react';

class Gutter extends Component {
    render() {
        const {width, backgroundColor} = this.props;

        const style = {width, backgroundColor, height: '100%'};

        return (
            <div style={style}/>
        )
    }

}

export default Gutter;

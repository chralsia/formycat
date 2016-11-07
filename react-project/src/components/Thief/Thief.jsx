import React from 'react';

import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Thief.scss';

import pic from './10522.png';

class Thief extends React.Component {
    render(){
        return (
            <div>
                <img  className={s.thief} src={pic} alt=""/>
            </div>
        );
    }
}

export default withStyles(Thief, s);
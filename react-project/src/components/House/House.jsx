import React from 'react';

import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './House.scss';

class House extends React.Component {
    render(){
        return (
            <div>
                <div className={s.territory}>
                    <div className={s.home}></div>
                </div>
            </div>
        );
    }
}

export default withStyles(House, s);
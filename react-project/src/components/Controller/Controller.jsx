import React from 'react';

import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Controller.scss';

import light from './alarm.gif';
import off from './off.png';

class Controller extends React.Component {
    constructor(props){
        super();
    }

    onClickPolice(e){
        alert("Охрана выехала!");
    }

    render(){
        let {danger, alarm, moving, sound, breaking} = this.props.settings;

        return (
            <div className={s.controller}>
                <span className={s.buttons}>
                    <div>
                        <button type="button" className={s.successButton} onClick={this.onClickPolice.bind(this)}>Вызвать охрану</button>
                    </div>
                    <div>
                        <button type="button" className={s.cancelButton} onClick={this.props.onClickCancel}>Отключить</button>
                    </div>
                </span>
                <div className={s.statistic}>
                    <span>
                        <label>Движение: </label>
                        <label>{moving}</label>
                    </span>
                    <span>
                        <label>Звук: </label>
                        <label>{sound}</label>
                    </span>
                    <span>
                        <label>Взлом: </label>
                        <label>{breaking}</label>
                    </span>
                </div>
                <span className={s.flashing}>
                    {danger ? <span><img src={light} /><div>Опасно!</div></span> : null}
                    {alarm ? <span><img src={light} /><div>Тревога!</div></span> : null}
                </span>

            </div>
        );
    }
}

export default withStyles(Controller, s);
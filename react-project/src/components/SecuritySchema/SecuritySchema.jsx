import React from 'react';

import Draggable from 'react-draggable';

import House from '../House/House';
import Thief from '../Thief/Thief';
import Controller from '../Controller/Controller';

import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './SecuritySchema.scss';

class SecuritySchema extends React.Component {
    constructor(){
        super();
        this.state = {
            position: {
                x: 0,
                y: 0
            },
            danger: false,
            alarm: false,
            moving: 0,
            breaking: 0,
            sound: 0
        };
    }

    onCancel(){
        this.setState({
            danger: false,
            alarm: false,
            moving: 0,
            breaking: 0,
            sound: 0
        });
    }

    handleDrag(e){
        console.log(`${e.screenX}   ${e.screenY}`);
        if((e.screenX > 180 && e.screenX < 250)|| e.screenY > 355){
            this.setState({
                moving: e.screenX%100,
                danger: true,
                alarm: false,
            });
        }
        if(e.screenX > 250 || e.screenY > 450){
            this.setState({
                moving: e.screenY%100,
                sound: e.screenX%100,
                breaking: (e.screenY + e.screenX)%100,
                alarm: true
            });
        }
        if(e.screenX < 180 || e.screenY < 355){
            this.setState({
                danger: false,
                alarm: false,
                moving: 0,
                breaking: 0,
                sound: 0
            });
        }
    }

    render(){
        let {position, danger, alarm, moving, sound, breaking} = this.state;

        return (
            <div>
                <h1 className={s.title}>My Security Schema</h1>
                <div className={s.container}>
                    <Draggable
                        defaultPosition={position}
                        grid={[25, 25]}
                        zIndex={30}
                        onStart={this.handleStart}
                        onDrag={this.handleDrag.bind(this)}
                        onStop={this.handleStop}>
                        <div className={s.thief}>
                            <Thief />
                        </div>
                    </Draggable>
                    <House />
                </div>
                <Controller settings={this.state} onClickCancel={this.onCancel.bind(this)}/>
                <div></div>
            </div>
        );
    }
}

export default withStyles(SecuritySchema, s);
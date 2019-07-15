import React, { Component } from 'react';
import { ReactBingmaps } from 'react-bingmaps';

export class Map extends Component {
    render() {
        return (                
            <ReactBingmaps 
                bingmapKey = "AukGn0Jz_W_XKbE40N4RPaNKicJh4srAyEtumFn0ZcC6jfCRGvUyb4mAw8Z3SaRr"
                center = {this.props.center}
                infoboxesWithPushPins = { this.props.pushPins }
            />
        )
    }
}
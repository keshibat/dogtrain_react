import React, { Component } from 'react';
import { ReactBingmaps } from 'react-bingmaps';

export class Map extends Component {
    render() {
        return (                
            <ReactBingmaps 
                bingmapKey = {process.env.REACT_APP_BINGMAP_API}
                center = {this.props.center}
                infoboxesWithPushPins = { this.props.pushPins }
            />
        )
    }
}
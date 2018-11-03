import React, { Component } from 'react';

class GoogleMap extends Component {
    // no idea how to integrate into a react-type application.
    // google maps.map
    componentDidMount(){
        new google.maps.Map(this.refs.map, {
            zoom: 12,
            center: {
                lat: this.props.lat,
                lng: this.props.lon
            }
        });
    };
    // jump to very last secion and take a glance to look over third party libraries.
    render() {
        //this.refs.map
        return <div ref="map" />;
    }
}

export default GoogleMap;
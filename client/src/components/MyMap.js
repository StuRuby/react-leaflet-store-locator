import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './MyMap.css';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

class MyMap extends Component {
  render() {
    const center = [54, -4];
    const zoom = 6;
    const {markers} = this.props;

    const latLngList = markers.map((marker) => {
      return marker.position
    })

    let mapSettings = {
      center,
      zoom,
      useFlyTo: true
    }

    if (latLngList.length > 0) {
      mapSettings.bounds = latLngList;
    }

    const map = (
      <Map {...mapSettings}>
        {/* <TileLayer
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        /> */}
        <TileLayer
          url='https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png'
          attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
        />
        {markers.map((marker, idx) =>
          <Marker key={`marker-${idx}`} position={marker.position}>
            <Popup>
              <h6>{ marker.storeName }</h6>
            </Popup>
          </Marker>
        )}
      </Map>
    );

    return (
      map
    );
  }
}

MyMap.propTypes = {
  markers: PropTypes.array.isRequired
};

export default MyMap;

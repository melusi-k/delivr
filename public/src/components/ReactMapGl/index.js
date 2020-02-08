import React,  { PureComponent } from 'react';
import MapGL, {GeolocateControl} from 'react-map-gl';

const geolocateStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  margin: 10
};

class ReactMap extends PureComponent
{
  constructor(props) {
  super(props);
 }

state = {
    viewport: {
      width: 400,
      height: 400,
      latitude: 37.7577,
      longitude: -122.4376,
      zoom: 8
    }
  };
  render() {

     return (
      <MapGL
        {...this.state.viewport}
        width="100%"
        height="100%"
        mapStyle="mapbox://styles/mapbox/streets-v11"
        onViewportChange={this._onViewportChange}
        mapboxApiAccessToken= 'pk.eyJ1IjoibWVsdXNpayIsImEiOiJjazNwbGgzMW0wNDFsM25vMWY1dDhtdTdqIn0.pXS45S9CQygpyPF2-5_uLw'
      >
      <GeolocateControl
          style={geolocateStyle}
          positionOptions={{enableHighAccuracy: true}}
          trackUserLocation={true}
        />
      </MapGL>
    );
}
}

export default ReactMap;

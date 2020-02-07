import React, { PureComponent } from 'react';
import MapGL from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const mapConfig = {
  center: [-28.5597, 29.7808],
  zoom: 8
};

class ReactMapGL extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      viewport: {
        width: window.innerWidth,
        height: 600,
        latitude: mapConfig.center[0],
        longitude: mapConfig.center[1],
        zoom: mapConfig.zoom,
        isDragging: false,
        startDragLngLat: mapConfig.center,
        pitch: 50,
        bearing: 0
      }
    };
    this.onViewportChange = this.onViewportChange.bind(this);
  }
onViewportChange(viewport)
{
  this.setState({
    viewport: { ...this.state.viewport, ...viewport }
  });
}
onComponentDidMount()
{
  //mapboxgl.setRTLTextPlugin('https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.2.0/mapbox-gl-rtl-text.js');
  //const pluginStatus = mapboxgl.getRTLTextPluginStatus();
  //console.log(pluginStatus);
}
  render() {
    const { viewport } = this.state;
    return (
      <div className="reactmapgl">
        <MapGL
          {...viewport}
          mapboxApiAccessToken='pk.eyJ1IjoibWVsdXNpayIsImEiOiJjazNwbGgzMW0wNDFsM25vMWY1dDhtdTdqIn0.pXS45S9CQygpyPF2-5_uLw'
          dragRotate
          onViewportChange={this.onViewportChange}
        >
        </MapGL>
      </div>
    );
  }
}

export default ReactMapGL;

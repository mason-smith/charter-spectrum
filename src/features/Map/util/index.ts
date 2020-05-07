// External Dependencies
import 'ol/ol.css';
import { defaults as defaultControls } from 'ol/control';
import { defaults } from 'ol/interaction';
import Map from 'ol/Map';
import View from 'ol/View';

// Local Dependencies
import baseMap from './baseMap';

const createMap = () => {
  const map = new Map({
    layers: [baseMap()],
    target: 'map',
    view: new View({
      center: [-10997148, 4569099],
      zoom: 5,
    }),
    controls: defaultControls({
      zoom: false,
      attribution: false,
      rotate: false,
      zoomOptions: { delta: 1 },
    }),
    interactions: defaults({
      altShiftDragRotate: false,
      keyboard: false,
      zoomDelta: 1,
    }),
  });

  // handleFeaturedBunker(map);

  return map;
};

export default createMap;

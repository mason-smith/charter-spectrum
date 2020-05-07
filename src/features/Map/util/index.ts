// External Dependencies
import 'ol/ol.css';
import { defaults as defaultControls } from 'ol/control';
import { defaults } from 'ol/interaction';
import Map from 'ol/Map';
import View from 'ol/View';

// Local Dependencies
import baseMap from './baseMap';

// import handleFeaturedBunker from './featuredBunkers';

const createMap = () => {
  const map = new Map({
    layers: [baseMap()],
    target: 'map',
    view: new View({
      center: [0, 0],
      projection: 'EPSG:4326',
      zoom: 0,
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

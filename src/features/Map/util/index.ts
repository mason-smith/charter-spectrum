// External Dependencies
import 'ol/ol.css';
import { defaults as defaultControls } from 'ol/control';
import { defaults } from 'ol/interaction';
import Map from 'ol/Map';
import View from 'ol/View';

// Local Dependencies
import baseMap from './baseMap';
import { Restaurant } from 'features/Restaurants/types';
import iconLayer from './Icon';

const createMap = (restaurantData: Restaurant) => {
  const map = new Map({
    layers: [baseMap(), iconLayer(restaurantData)],
    target: 'map',
    view: new View({
      projection: 'EPSG:4326',
      center: [-97.5, 40],
      zoom: 5,
      minZoom: 5,
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

  return map;
};

export default createMap;

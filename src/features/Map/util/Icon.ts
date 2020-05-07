import Feature from 'ol/Feature';
import VectorSource from 'ol/source/Vector';
import { Vector as VectorLayer } from 'ol/layer';
import Point from 'ol/geom/Point';
import { Icon, Style } from 'ol/style';

// Local Dependencies
import { Restaurant } from 'features/Restaurants/types';
import svg from './store.svg';

var iconStyle = new Style({
  image: new Icon({
    src: svg,
  }),
});

const iconFeature = (restaurantData: Restaurant) => {
  return new Feature({
    geometry: new Point([
      Number(restaurantData.long),
      Number(restaurantData.lat),
    ]),
    properties: restaurantData,
  });
};

var iconSource = (restaurantData: Restaurant) => {
  return new VectorSource({
    features: [iconFeature(restaurantData)],
  });
};

var iconLayer = (restaurantData: Restaurant) => {
  return new VectorLayer({
    source: iconSource(restaurantData),
    style: [iconStyle],
  });
};

export default iconLayer;

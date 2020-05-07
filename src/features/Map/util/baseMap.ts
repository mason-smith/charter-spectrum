// External Dependencies
import Tile from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';

const osmSource = () => new OSM();

const baseMap = () => new Tile({ source: osmSource() });

export default baseMap;

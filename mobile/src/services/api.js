import axios from 'axios'

const api= axios.create({
    url: 'https://services9.arcgis.com/BepHwAeiHSPnKF0N/ArcGIS/rest/services/Covid19_Teresina/FeatureServer/0/query?f=json&where=(nomebairro%20IS%20NOT%20NULL)%20AND%20(1%3D1)&returnGeometry=true&spatialRel=esriSpatialRelIntersects&outFields=*&resultOffset=0&resultRecordCount=50&cacheHint=true'
})

export default api;
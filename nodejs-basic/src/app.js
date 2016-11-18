import GeoLocator from './geo-locator'

const locator = new GeoLocator()

locator
  .getMyLocation()
  .then(response => response.json())
  .then(json => locator.showData(json))

import GeoLocator from './geo-locator'

const locator = new GeoLocator()

locator
  .getMyLocation()
  .then(function(response) {
      return response.json()
  })
  .then(function(json) {
      locator.showData(json)
  })

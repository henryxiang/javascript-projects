import Locator from './locator'

const locator = new Locator()

locator
  .getMyLocation()
  .then(function(response) {
      return response.json()
  })
  .then(function(json) {
      locator.showData(json)
  })

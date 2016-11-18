import fetch from 'node-fetch'

class Locator {

  constructor(api) {
    if (api) {
      this.api = api
    }
    else {
      this.api = 'https://freegeoip.net/json/'
    }
  }

  getMyLocation() {
    return fetch(this.api)
  }

  getLocationFromIp(ip) {
    return fetch(this.api + ip)
  }

  showData(data) {
    console.log(`IP Address: ${data.ip}`)
    console.log(`Location:   ${data.city}, ${data.region_name} ${data.zip_code}, ${data.country_name}`)
    console.log(`Coordinate: ${data.latitude}, ${data.longitude}`)
  }

}

export default Locator
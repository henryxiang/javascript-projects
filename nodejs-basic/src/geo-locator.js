import fetch from 'node-fetch'

class GeoLocator {

  constructor(api) {
    this.api = api || 'https://freegeoip.net/json/'
  }

  getMyLocation() {
    return fetch(this.api) //return a Promise object
  }

  getLocationFromIp(ip) {
    return fetch(this.api + ip) //return a Promise object
  }

  showData(data) {
    const {ip, city, region_name, country_name, latitude, longitude} = data
    console.log("Device Current Location")
    console.log("=======================")
    console.log(`IP Address: ${ip}`)
    console.log(`Location:   ${city}, ${region_name}, ${country_name}`)
    console.log(`Coordinate: ${latitude}, ${longitude}\n`)
  }

}

export default GeoLocator

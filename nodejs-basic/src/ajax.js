import fetch from 'node-fetch'

const url = 'http://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2014-01-01&endtime=2014-01-02'
const data = fetch(url)

console.log(data)
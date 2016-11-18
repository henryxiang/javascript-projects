function timestamp() {
  var ts = new Date().toISOString();
  return "[" + ts + "]";
}

function prettyPrint(data) {
   JSON.stringify(data, null, 2);
}

module.exports = {
  timestamp: timestamp,
  prettyPrint: prettyPrint
}
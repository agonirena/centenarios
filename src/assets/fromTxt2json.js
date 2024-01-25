var fs = require('fs');
let utmObj = require('utm-latlng')
let utm = new utmObj('ETRS89')

require.extensions['.txt'] = function (module, filename) {
    module.exports = fs.readFileSync(filename, 'utf8');
};

var bulk = require("./pirineoak-bernera-aspe.txt");

const ToJson = (str) => {

    const regex = /(\d+)\s(.+?(?=\s\d))\s(\d+)\s(\d+)([TS])\sX\.([\d]+)\sY\.([\d]+)\n/gm;
    let m;
    let output = []

    while ((m = regex.exec(str)) !== null) {
        // This is necessary to avoid infinite loops with zero-width matches
        if (m.index === regex.lastIndex) {
            regex.lastIndex++;
        }

        let zone = m[4]
        let band = m[5]
        let x = m[6]
        let y = m[7]
        let position = utm.convertUtmToLatLng(x, y, zone, band);

        output.push ({
            idx: m[1],
            name: m[2],
            altitude: m[3],
            utm_zone: zone,
            mgrs_band: band,
            utm_x: x,
            utm_y: y,
            position: position
        })
    }

    return output
}

console.log(JSON.stringify(ToJson(bulk)))
import dotenv from 'dotenv'
import axios from 'axios'
dotenv.config()

const APIKEY = process.env.API_KEY
const APIURL = `https://api.tfl.gov.uk/Mode/tube/Arrivals?app_key=${APIKEY}`

axios.get(APIURL).then((response) => {
    const tubeLineCurrentRecords = response.data
    const keys = Object.keys(tubeLineCurrentRecords);
    let tubeLinesRecord = [];
    for (let key in keys) {
        let { id, lineId, lineName, stationName, towards, currentLocation, expectedArrival, modeName } = tubeLineCurrentRecords[key]
        let tubeLineRecord = {
            id: id,
            lineId: lineId,
            lineName: lineName,
            stationName: stationName,
            towards: towards,
            currentLocation: currentLocation,
            expectedArrival: expectedArrival,
            modeName: modeName
        };
        return tubeLinesRecord.push(tubeLineRecord);
    }

    console.log(tubeLinesRecord);

}).catch((error) => {
    console.log(error)
})
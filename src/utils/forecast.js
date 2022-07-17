const request = require('request')

const forecast = (latitude, longitude, callback) =>  {
const url ='http://api.weatherstack.com/current?access_key=e40aaf2d726dc496be17dbeaa7cb52b9&query='+latitude+','+longitude+'&units=m'
request( {url, json: true}, (error, {body}) => {

    if (error) {
        callback('unable to connect to weather service', undefined)
    } else if (body.error){
        callback('unable to find the location', undefined)
    } else {

        callback(undefined, body.current.weather_descriptions[0] +': A temperatura actual é de ' + body.current.temperature  +' graus'+ ' , a temperatura aparente é de ' + body.current.feelslike + ' Graus ' + 'e a pressao é de ' + body.current.pressure + ' Hpa' 
            
        )
    }


}


)

}

module.exports = forecast
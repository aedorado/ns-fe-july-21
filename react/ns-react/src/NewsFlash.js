import React from 'react';

/*
Use fetch() to make Api call.

Should be able to show news info when App loads.

After App loads completely you should have called fetch() only 2 times(first one for weather-info and second one for news-info).

News info must contain title and description of each article.

Should be able to make Api call based on search query (searched-location) for weather-info.

Should be able to handle invalid location search query (serached-location) for weather-info. for example: mubai city can not be found. In order to handle this, just clear the input field, nothing else

Provide two buttons to change language, with attributes data-testid='lang-en'(change language to English) and data-testid='lang-hi'(change language to Hindi) respectively

Should be able to change News language By Making only one API call only for news-Info
*/

class NewsFlash extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            weather: {
                temp: 0
            },
            cityName: '',
            cityWeatherError: false
        }
        this.enterCityName = this.enterCityName.bind(this);
        this.enterCityNameKP = this.enterCityNameKP.bind(this);
    }

    // 

    componentDidMount() {
        navigator.geolocation.getCurrentPosition((location) => {
            let lat = location.coords.latitude;
            let lon = location.coords.longitude;

            let wurl = 'http://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=deef73506b392065997dc6e81e0f4770'.replace("{lat}", lat).replace("{lon}", lon);
            console.log(wurl);

            fetch(wurl, {})
                .then(resp => resp.json())
                .then(data => {
                    this.setState({
                        weather: {
                            temp: data.main.temp,
                            country: data.sys.country
                        }
                    })
                });

        })
    }

    enterCityNameKP(e) {
        if (e.key == 'Enter') {
            let cityWeatherURL = `http://api.openweathermap.org/data/2.5/weather?q={city}&appid=deef73506b392065997dc6e81e0f4770`.replace('{city}', this.state.cityName);
            fetch(cityWeatherURL)
            .then(res => res.json(), err => console.log(err))
            .then(data => {
                if (data.cod === 200) {
                    this.setState({
                        weather: {
                            temp: data.main.temp,
                            country: data.sys.country
                        }
                    })
                } else if (data.cod === 404) {
                    this.setState({
                        cityName: ''
                    });
                }
            })
            this.setState({
                cityName: ''
            });
        }
    }

    enterCityName(e) {
        this.setState({
            cityName: e.target.value
        });
    }

    render() {
        return (
            <div>
                <div>
                    <fieldset>
                        <input type="text" value={this.state.cityName} onChange={this.enterCityName} onKeyPress={this.enterCityNameKP}></input>
                    </fieldset>
                </div>
                <div>
                    <p>Weather Information</p>
                    <table>
                        <tr>
                            <td>Temperatue</td>
                            <td>{Math.round(this.state.weather.temp)} &deg;C</td>
                        </tr>
                        <tr>
                            <td>Country</td>
                            <td>{this.state.weather.country}</td>
                        </tr>
                    </table>
                </div>
            </div>
        );
    }

}

export default NewsFlash;

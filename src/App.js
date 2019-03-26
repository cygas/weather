import React, {Component} from 'react';
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';

const API_KEY = '3f172f26e34b0762f3e3265d12e89a71';

export default class App extends Component {
    state = {
        weather: {
            message: 'enter the city and country'
        }
    };

    getWeather = async e => {
        e.preventDefault();
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;
        const apiCall = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
        const data = await apiCall.json();
        this.setState({weather: data});
    };

    render() {
        return (
            <div>
                <div className='wrapper'>
                    <div className='main'>
                        <div className='row'>
                            <div className='col-sm-5 title-container'>
                                <Titles/>
                            </div>
                            <div className='col-sm-7 form-container'>
                                <Form getWeather={this.getWeather}/>
                                <Weather {...this.state.weather}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
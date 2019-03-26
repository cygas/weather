import React, {Component} from 'react';

export default class Weather extends Component {
    render() {
        return (
            <div>
                {this.props.message ?
                    <p>{this.props.message}</p>
                    :
                    (
                        <React.Fragment>
                            <p>Location: {this.props.name}, {this.props.sys.country}</p>
                            <p>Temperature: {this.props.main.temp}</p>
                            <p>Pressure: {this.props.main.pressure}</p>
                            <p>Humidity: {this.props.main.humidity}</p>
                            <p>Conditions: {this.props.weather[0].description}</p>
                        </React.Fragment>
                    )}
            </div>
        );
    }
}
import React, {Component} from 'react';

export default class Weather extends Component {
    render() {
        return (
            <div className='weather__info'>
                {this.props.message ?
                    <p className='weather__error'>{this.props.message}</p>
                    :
                    (
                        <React.Fragment>
                            <p className='weather__key'>
                                Location:
                                <span className='weather__value'> {this.props.name}, {this.props.sys.country}</span>
                            </p>
                            <p className='weather__key'>
                                Temperature:
                                <span className='weather__value'> {this.props.main.temp}</span>
                            </p>
                            <p className='weather__key'>
                                Pressure:
                                <span className='weather__value'> {this.props.main.pressure}</span>
                            </p>
                            <p className='weather__key'>
                                Humidity:
                                <span className='weather__value'> {this.props.main.humidity}</span>
                            </p>
                            <p className='weather__key'>
                                Conditions:
                                <span className='weather__value'> {this.props.weather[0].description}</span>
                            </p>
                        </React.Fragment>
                    )}
            </div>
        );
    }
}
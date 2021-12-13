import React from 'react';

class BoilingVerdict extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        if (this.props.tempInC >= 100) {
            return (<p>Water is boiling</p>);
        }
        return (<p>Water is not boiling</p>);
    }
}


// 2 inputs
// either in celcius or F
// BV -> water will boil or not boil .. 
// if entered in F -> celcius should update to corresponding value
// if entered in C -> farenheit should update to corresponding value

class TemperatureInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.onTempChange(e.target.value);
    }

    render() {
        return (<fieldset>
            <legend>Enter temp in {this.props.scale}</legend>
            <input type="text" value={this.props.temp} onChange={this.handleChange}></input>
        </fieldset>);
    }
}

class Calculator extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            temp: '',
            scale: 'c'
        }
        this.handleCelChange = this.handleCelChange.bind(this);
        this.handleFarChange = this.handleFarChange.bind(this);
    }

    handleCelChange(temperature) {
        this.setState({
            temp: temperature,
            scale: 'c'
        });
    }

    handleFarChange(temperature) {
        this.setState({
            temp: temperature,
            scale: 'f'
        })
    }

    cToF(c) {
        return ((parseFloat(c) * 9.0 / 5.0) + 32.0);
    }

    fToC(f) {
        return (5.0 / 9.0) * (parseFloat(f) - 32);
    }

    render() {

        const cel = (this.state.scale === 'c') ? this.state.temp: this.fToC(this.state.temp);
        const far = (this.state.scale === 'f') ? this.state.temp: this.cToF(this.state.temp);
        return (
            <div>
                <TemperatureInput temp={cel} onTempChange={this.handleCelChange} scale="c" />
                <TemperatureInput temp={far} onTempChange={this.handleFarChange} scale="f" />
                <BoilingVerdict tempInC={this.state.temp} />
            </div>
        );
    }

}

class LSU extends React.Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Calculator />
        );
    }
}

export default LSU;
